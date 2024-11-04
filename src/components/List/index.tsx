'use client'
import { useState } from "react";
import { ListType } from "@/utils/types";

 
const List = ({ id, message }: ListType) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isImportant, setIsImportant] = useState(false);
 
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
 
    const toggleImportant = () => {
        setIsImportant(!isImportant);
    };
 
    return (
        <>
            <div className={`flex gap-4 p-4 my-2 rounded-xl  ${isImportant ? 'bg-yellow-200' : 'bg-pink-100'}`} key={id} data-testid="list-item">
                <div className="md:w-full md:flex md:items-center md:text-xl text-sm w-full">
                    {isVisible ? message : ""}
                </div>
                <button className="md:bg-blue-200 md:w-24 md:rounded-xl md:p-2.5 bg-blue-200 w-24 rounded-xl text-sm p-2" data-testid="toggle-message" onClick={toggleVisibility}>
                    {isVisible ? "Hide" : "Show"}
                </button>
                <button className="md:bg-blue-200 md:w-24 md:rounded-xl md:p-2.5 bg-blue-200 w-24 rounded-xl text-sm p-2" data-testid="toggle-important" onClick={toggleImportant}>
                    {isImportant ? "Unimportant" : "Important"}
                </button>
            </div>
        </>
    );
};
export default List;