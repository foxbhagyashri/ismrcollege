import { useEffect, useRef, useState } from "react";

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

const wrapperStyle = {
    position: "relative",
    width: "100%",
    minHeight: "300px",
};

const widgetContainerStyle = {
    width: "100%",
    minHeight: "300px",
};

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

const SCRIPT_ID = "__ismrFormWidgetScript";

const SCRIPT_URL =
    "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ismr/ee-form-widget/form-1/widget.js";

const LOAD_TIMEOUT_MS = 10000;

const getWidgetConstructor = () => {
    try {
        if (typeof window !== "undefined" && typeof window.eeFormWidget === "function") {
            return window.eeFormWidget;
        }
    } catch (error) {}

    try {
        // eslint-disable-next-line no-undef
        if (typeof eeFormWidget === "function") {
            // eslint-disable-next-line no-undef
            return eeFormWidget;
        }
    } catch (error) {}

    return null;
};

const ISMRFormModal = ({ open, onClose }) => {
    const [widgetReady, setWidgetReady] = useState(
        () => !!getWidgetConstructor()
    );
    const [loading, setLoading] = useState(true);
    const instanceRef = useRef(null);

    useEffect(() => {
        if (getWidgetConstructor()) {
            setWidgetReady(true);
            return;
        }

        let cancelled = false;
        let script = document.getElementById(SCRIPT_ID);

        if (!script) {
            script = document.createElement("script");
            script.id = SCRIPT_ID;
            script.src = SCRIPT_URL;
            script.async = true;
            document.head.appendChild(script);
        }

        const handleLoad = () => {
            script.dataset.loaded = "true";

            if (!cancelled) {
                setWidgetReady(true);
            }
        };

        const handleError = () => {
            console.error("Failed to load ISMR widget script.");
            script.remove();
        };

        if (script.dataset.loaded === "true") {
            setWidgetReady(true);
        } else {
            script.addEventListener("load", handleLoad);
            script.addEventListener("error", handleError);
        }

        return () => {
            cancelled = true;
            script.removeEventListener("load", handleLoad);
            script.removeEventListener("error", handleError);
        };
    }, []);

    useEffect(() => {
        if (!open) {
            return;
        }

        setLoading(true);

        if (!widgetReady) {
            return;
        }

        const container = document.getElementById("ee-form-1");

        if (!container) {
            console.error("ISMR widget container not found.");
            setLoading(false);
            return;
        }

        const WidgetConstructor = getWidgetConstructor();

        if (!WidgetConstructor) {
            console.error("eeFormWidget constructor is unavailable.");
            setLoading(false);
            return;
        }

        let cancelled = false;
        let observer = null;
        let timeoutId = null;

        const finish = () => {
            if (cancelled) {
                return;
            }

            setLoading(false);

            if (observer) {
                observer.disconnect();
                observer = null;
            }

            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
        };

        const waitForContent = () => {
            if (container.childElementCount > 0) {
                finish();
                return;
            }

            observer = new MutationObserver(() => {
                if (container.childElementCount > 0) {
                    finish();
                }
            });

            observer.observe(container, { childList: true, subtree: true });

            timeoutId = setTimeout(finish, LOAD_TIMEOUT_MS);
        };

        const initialize = async () => {
            try {
                container.innerHTML = "";

                const instance = new WidgetConstructor();
                instanceRef.current = instance;

                await instance.init("ismr", "form-1", "ee-form-1");

                if (cancelled) {
                    return;
                }

                window._eeFormWidget = instance;
                waitForContent();
            } catch (error) {
                console.error("ISMR form initialization failed:", error);
                finish();
            }
        };

        initialize();

        return () => {
            cancelled = true;

            if (observer) {
                observer.disconnect();
            }

            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            try {
                instanceRef.current?.destroy?.();
                instanceRef.current?.unmount?.();
            } catch (error) {
                console.error("ISMR form cleanup failed:", error);
            }

            instanceRef.current = null;
        };
    }, [open, widgetReady]);

    useEffect(() => {
        if (!open) {
            return;
        }

        let timeoutId;

        const clickHandler = (event) => {
            const button = event.target.closest("button");

            if (!button || button.innerText.trim() !== "Register Now") {
                return;
            }

            timeoutId = setTimeout(() => {
                const container = document.getElementById("ee-form-1");

                const hasErrors = container?.querySelector(
                    ".ee-error, .ee-error-msg, .error, .invalid"
                );

                if (!hasErrors) {
                    onClose();
                }
            }, 300);
        };

        document.addEventListener("click", clickHandler);

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener("click", clickHandler);
        };
    }, [open, onClose]);

    if (!open) {
        return null;
    }

    return (
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
                    <div id="ee-form-1" style={widgetContainerStyle} />

                    {loading && (
                        <div style={loaderOverlayStyle} role="status" aria-label="Loading form">
                            <div style={spinnerStyle} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ISMRFormModal;