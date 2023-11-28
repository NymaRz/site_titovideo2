import React, {useEffect} from "react";

const ChatbotComponent = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://embed.tawk.to/65660d5e1db16644c555853a/1hgba8f6o";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }
    , []);

    return (
        <div>
<script type="text/javascript" src="https://embed.tawk.to/65660d5e1db16644c555853a/1hgba8f6o"></script>

        </div>
    );
}

export default ChatbotComponent;