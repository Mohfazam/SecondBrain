import { ReactElement } from "react";

interface Buttonprops{
    varient: "primary" | "secondary";
    text: string;
    startIcon: ReactElement;
    endIcon: ReactElement;
}

const vareintClasses = {
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600"
};

const defaultStyles = "px- py-2 rounded-md"

export function Button({varient, text, startIcon, endIcon}: Buttonprops){
    return <button className={`${vareintClasses[varient]}${defaultStyles}`}>
        {text}
    </button>
}