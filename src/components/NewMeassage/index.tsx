'use client'
import { useState } from "react";

interface NewMessageProps {
    onSend: (message: string) => void;
}
 
const NewMessage: React.FC<NewMessageProps> = ({ onSend }) => {
    const [message, setMessage] = useState("");
 
    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage("");
        }
    };
    
    return (
        <div className="md:bg-blue-200 md:m-10 md:p-10 md:rounded-xl md:w-3/5 md:mx-auto md:flex md:justify-center md:border-b-4 flex m-5 flex-col">
            <div className='md:flex flex justify-center items-center flex-col'>
                <input
                    type="text"
                    className="md:m-3 md:rounded-lg md:w-3/4 md:p-4 flex rounded-xl w-fit text-sm p-2 m-1"
                    placeholder="Leave a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className="md:m-4 md:p-3 md:bg-blue-400 md:rounded-lg md:text-white text-sm bg-blue-400 m-2 p-2 rounded-xl text-white flex"
                    onClick={handleSend}>
                    Send!
                </button>
            </div>
        </div>
    );
};
 
export default NewMessage;
 