'use client'
import { useState } from "react";
 
const NewMessage = ({ onSend }) => {
    const [message, setMessage] = useState("");
 
    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage("");
        }
    };
    
    return (
        <div className="bg-blue-200 my-10 p-10 rounded-xl w-fit mx-auto border-b-4 border-yellow-600">
            <div>
                <input
                    type="text"
                    className="m-3 rounded-lg"
                    placeholder="message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className="w-16 p-3 m-3 bg-blue-300 rounded-lg"
                    onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
};
 
export default NewMessage;
 