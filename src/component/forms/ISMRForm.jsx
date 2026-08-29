import React, { useEffect } from "react";

const ISMRForm = () => {
    useEffect(() => {
        window.ee_form_widget_baseurl =
            "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/";

        // Load CSS
        if (!document.getElementById("__formWidgetCss")) {
            const link = document.createElement("link");
            link.id = "__formWidgetCss";
            link.rel = "stylesheet";
            link.href =
                window.ee_form_widget_baseurl + "css/stylesheet.min.css";
            document.head.appendChild(link);
        }

        // Initialize widget
        const initWidget = async () => {
            if (typeof window.eeFormWidget === "function") {
                if (!window._eeFormWidget) {
                    window._eeFormWidget = new window.eeFormWidget();
                }

                await window._eeFormWidget.init(
                    "ismr",
                    "form-1",
                    "ee-form-1"
                );
            }
        };

        // Load JS
        if (!document.getElementById("__formWidgetScript")) {
            const script = document.createElement("script");
            script.id = "__formWidgetScript";
            script.src =
                window.ee_form_widget_baseurl + "js/eeFormWidget.min.js";
            script.async = true;
            script.onload = initWidget;
            document.body.appendChild(script);
        } else {
            initWidget();
        }
    }, []);

    return <div id="ee-form-1"></div>;
};

export default ISMRForm;