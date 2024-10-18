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
            <div className={`flex gap-4 p-4 my-2 rounded ${isImportant ? 'bg-yellow-200' : 'bg-pink-100'}`} key={id} data-testid="list-item">
                <div className="basis-4/5">
                    {isVisible ? message : ""}
                </div>
                <button className="basis-1/5 text-pink-800 bg-pink-100 font-bold rounded" data-testid="toggle-message" onClick={toggleVisibility}>
                    {isVisible ? "Hide" : "Show"}
                </button>
                <button className="basis-1/5 text-pink-800 bg-pink-100 font-bold rounded" data-testid="toggle-important" onClick={toggleImportant}>
                    {isImportant ? "Unimportant" : "Important"}
                </button>
            </div>
        </>
    );
};
export default List;