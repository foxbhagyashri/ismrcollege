import { useEffect } from "react";

const ChatbotLoader = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            const chatWindow = document.getElementById("__eechatWindow");
            if (chatWindow) {
                chatWindow.style.height = "100vh";
                chatWindow.style.maxHeight = "100vh";
                clearInterval(interval);
            }
        }, 500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (document.getElementById("external-chatbot-script")) return;

        const script = document.createElement("script");
        script.id = "external-chatbot-script";
        script.src =
            "https://extraaedgeresources.blob.core.windows.net/documents/ismr/Chatbot/js/chat.js";
        script.async = false;
        script.defer = false;

        document.body.appendChild(script);
    }, []);

    return null;
};

export default ChatbotLoader;
