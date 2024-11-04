'use client'
import { ListType } from "@/utils/types";
import { useState } from "react";
import List from "../List";
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
        <section className='flex justify-center items-center w-full'>
        <div className="md:bg-green-300 md:w-3/4 md:rounded-xl md:m-16 w-full rounded-xl m-4 bg-green-300">
            <NewMessage onSend={addMessage} /> 
            <div
                className="justify-center items-center"
                data-testid="guest-list">
                { messages && messages.map((item) => 
                <List key={item.id} {...item} />)}
            </div>
        </div>
        </section>
    )
}
export default GuestList;