import { useEffect } from "react";

const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    zIndex: 9999,
};

const modalStyle = {
    background: "#fff",
    width: "90%",
    maxWidth: "400px",
    margin: "5% auto",
    borderRadius: "8px",
    padding: "16px",
    position: "relative",
};

const closeStyle = {
    position: "absolute",
    top: "10px",
    right: "12px",
    border: "none",
    background: "transparent",
    fontSize: "18px",
    cursor: "pointer",
};

const ISMRFormModal = ({ open, onClose }) => {
    useEffect(() => {
        if (!open) return;

        window.ee_form_widget_baseurl =
            "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/";

        // Inject CSS once
        if (!document.getElementById("__formWidgetCss")) {
            const link = document.createElement("link");
            link.id = "__formWidgetCss";
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href =
                window.ee_form_widget_baseurl + "css/stylesheet.min.css";
            document.head.appendChild(link);
        }

        // Inject JS once
        if (!document.getElementById("__formWidgetScript")) {
            const script = document.createElement("script");
            script.id = "__formWidgetScript";
            script.src =
                window.ee_form_widget_baseurl + "js/eeFormWidget.min.js";
            script.async = true;

            script.onload = async () => {
                if (typeof eeFormWidget === "function") {
                    window._eeFormWidget = new eeFormWidget();
                    await window._eeFormWidget.init(
                        "ismr",
                        "form-1",
                        "ee-form-1",
                    );
                }
            };

            document.body.appendChild(script);
        } else {
            // Script already loaded, just init again
            if (window._eeFormWidget) {
                window._eeFormWidget.init("ismr", "form-1", "ee-form-1");
            }
        }
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const clickHandler = (e) => {
            const btn = e.target.closest("button");
            if (!btn) return;

            if (btn.innerText.trim() === "Register Now") {
                // Let widget validation complete
                setTimeout(() => {
                    const hasErrors =
                        document.querySelectorAll(
                            ".ee-error, .ee-error-msg, .error, .invalid",
                        ).length > 0;

                    if (!hasErrors) {
                        onClose(); // ✅ close modal
                    }
                }, 300);
            }
        };

        document.addEventListener("click", clickHandler);

        return () => {
            document.removeEventListener("click", clickHandler);
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div style={overlayStyle}>
            <div style={modalStyle}>
                <button
                    onClick={onClose}
                    style={closeStyle}
                >
                    ✕
                </button>
                <div id="ee-form-1" />
            </div>
        </div>
    );
};

export default ISMRFormModal;
