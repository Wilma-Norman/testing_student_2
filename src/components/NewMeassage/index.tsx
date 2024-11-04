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
        <div className="bg-blue-200 m-10 p-10 rounded-xl w-3/5 mx-auto border-b-4 ">
            <div>
                <input
                    type="text"
                    className="m-3 rounded-lg w-3/4 p-4"
                    placeholder="Leave a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className="m-4 p-3 bg-blue-400 rounded-lg text-white"
                    onClick={handleSend}>
                    Send!
                </button>
            </div>
        </div>
    );
};
 
export default NewMessage;
 