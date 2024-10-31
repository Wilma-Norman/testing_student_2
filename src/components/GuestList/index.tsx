'use client'
import { ListType } from "@/utils/types";
import { useState } from "react";
import List from '../List';
import NewMessage from '../NewMeassage';
import React from "react";
 
type GuestListProps = {
    listItem: ListType[] | null
}
 
const GuestList = ({ listItem }: GuestListProps) => {
    const [messages, setMessages] = useState(listItem || []);
 
    const addMessage = (message: string) => {
        const newMessage = { id: messages.length + 1, message };
        setMessages([...messages, newMessage]);
    }
 
    return (
        <div className="bg-green-300 w-3/4 flex flex-col justify-center">
            <NewMessage onSend={addMessage} />
            <div
                className="bg-green-300 flex-col justify-center"
                data-testid="guest-list"
            >
                { messages && messages.map((item) => <List key={item.id} {...item} />)}
            </div>
        </div>
    )
}
export default GuestList;