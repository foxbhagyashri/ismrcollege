import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Load the widget LIBRARY directly, not the ISMR wrapper widget.js, testg
// because the wrapper auto-initialises into #ee-form-1 on its own.
const BASE_URL =
    "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/";
const LIB_URL = BASE_URL + "js/eeFormWidget.min.js";
const CSS_URL = BASE_URL + "css/stylesheet.min.css";
const LIB_ID = "__eeFormWidgetLib";
const CSS_ID = "__formWidgetCss";

// Unique ID so we never collide with the page's own #ee-form-1 (footer form).
const CONTAINER_ID = "ee-form-modal-1";

const LOAD_TIMEOUT_MS = 10000;
const LIB_WAIT_MS = 15000;

const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    zIndex: 9999,
    overflowY: "auto",
};

const modalStyle = {
    background: "#fff",
    width: "90%",
    maxWidth: "400px",
    margin: "5% auto",
    borderRadius: "8px",
    padding: "16px",
    position: "relative",
    boxSizing: "border-box",
};

const closeStyle = {
    position: "absolute",
    top: "10px",
    right: "12px",
    border: "none",
    background: "transparent",
    fontSize: "18px",
    cursor: "pointer",
    zIndex: 10,
};

const wrapperStyle = { position: "relative", width: "100%", minHeight: "300px" };
const widgetContainerStyle = { width: "100%", minHeight: "300px" };

const loaderOverlayStyle = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    zIndex: 5,
};

const spinnerStyle = {
    width: "44px",
    height: "44px",
    border: "4px solid #e5e7eb",
    borderTopColor: "#d32f2f",
    borderRadius: "50%",
    animation: "ismr-spin 0.8s linear infinite",
};

const keyframes = `
@keyframes ismr-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;

const getWidgetConstructor = () => {
    try {
        if (typeof window.eeFormWidget === "function") return window.eeFormWidget;
    } catch (e) { }
    try {
        // Handles a top-level `class eeFormWidget` that isn't attached to window
        // eslint-disable-next-line no-undef
        if (typeof eeFormWidget === "function") return eeFormWidget;
    } catch (e) { }
    return null;
};

let libPromise = null;

// Resolves once the eeFormWidget constructor really exists.
// Works whether the page already loaded the library (via its own widget.js) or not.
const loadWidgetLibrary = () => {
    const existing = getWidgetConstructor();
    if (existing) return Promise.resolve(existing);
    if (libPromise) return libPromise;

    window.ee_form_widget_baseurl = window.ee_form_widget_baseurl || BASE_URL;

    if (!document.getElementById(CSS_ID)) {
        const css = document.createElement("link");
        css.id = CSS_ID;
        css.rel = "stylesheet";
        css.type = "text/css";
        css.href = CSS_URL;
        document.head.appendChild(css);
    }

    const alreadyRequested =
        document.getElementById(LIB_ID) ||
        document.querySelector('script[src*="eeFormWidget.min.js"]');

    if (!alreadyRequested) {
        const script = document.createElement("script");
        script.id = LIB_ID;
        script.src = LIB_URL;
        script.async = true;
        document.head.appendChild(script);
    }

    libPromise = new Promise((resolve, reject) => {
        const started = Date.now();
        const check = () => {
            const ctor = getWidgetConstructor();
            if (ctor) return resolve(ctor);
            if (Date.now() - started > LIB_WAIT_MS) {
                libPromise = null; // allow a retry next time the modal opens
                return reject(new Error("eeFormWidget library did not load in time."));
            }
            setTimeout(check, 100);
        };
        check();
    });

    return libPromise;
};

const ISMRFormModal = ({ open, onClose }) => {
    const [loading, setLoading] = useState(true);
    const containerRef = useRef(null);
    const instanceRef = useRef(null);

    // Initialise the widget each time the modal opens
    useEffect(() => {
        if (!open) return;

        setLoading(true);

        let cancelled = false;
        let observer = null;
        let timeoutId = null;

        const finish = () => {
            if (cancelled) return;
            setLoading(false);
            observer?.disconnect();
            observer = null;
            clearTimeout(timeoutId);
        };

        const initialize = async () => {
            try {
                const WidgetConstructor = await loadWidgetLibrary();
                const container = containerRef.current;
                if (cancelled || !container) return;

                container.innerHTML = "";

                // Watch for content BEFORE init so we don't miss a fast render
                observer = new MutationObserver(() => {
                    if (container.childElementCount > 0) finish();
                });
                observer.observe(container, { childList: true, subtree: true });
                timeoutId = setTimeout(finish, LOAD_TIMEOUT_MS);

                const instance = new WidgetConstructor();
                instanceRef.current = instance;

                await instance.init("ismr", "form-1", CONTAINER_ID);

                if (!cancelled && container.childElementCount > 0) finish();
            } catch (error) {
                console.error("ISMR form initialization failed:", error);
                finish();
            }
        };

        initialize();

        return () => {
            cancelled = true;
            observer?.disconnect();
            clearTimeout(timeoutId);
            try {
                instanceRef.current?.destroy?.();
                instanceRef.current?.unmount?.();
            } catch (error) {
                console.error("ISMR form cleanup failed:", error);
            }
            instanceRef.current = null;
        };
    }, [open]);

    // Close after a successful "Register Now" click inside THIS modal only
    useEffect(() => {
        if (!open) return;

        let timeoutId;
        const container = containerRef.current;
        if (!container) return;

        const clickHandler = (event) => {
            const button = event.target.closest("button");
            if (!button || button.innerText.trim() !== "Register Now") return;

            timeoutId = setTimeout(() => {
                const hasErrors = container.querySelector(
                    ".ee-error, .ee-error-msg, .error, .invalid"
                );
                if (!hasErrors) onClose();
            }, 300);
        };

        container.addEventListener("click", clickHandler);
        return () => {
            clearTimeout(timeoutId);
            container.removeEventListener("click", clickHandler);
        };
    }, [open, onClose]);

    if (!open) return null;

    return createPortal(
        <div style={overlayStyle}>
            <style>{keyframes}</style>

            <div style={modalStyle}>
                <button
                    onClick={onClose}
                    style={closeStyle}
                    aria-label="Close registration form"
                >
                    ✕
                </button>

                <div style={wrapperStyle}>
                    <div id={CONTAINER_ID} ref={containerRef} style={widgetContainerStyle} />

                    {loading && (
                        <div style={loaderOverlayStyle} role="status" aria-label="Loading form">
                            <div style={spinnerStyle} />
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ISMRFormModal;
