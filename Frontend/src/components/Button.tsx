import { ReactElement } from "react";

interface Buttonprops{
    varient: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
}

const vareintClasses = {
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600"
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center"

export function Button({varient, text, startIcon, endIcon, onClick, fullWidth}: Buttonprops){
    return <button onClick={onClick} className={`${vareintClasses[varient]} ${defaultStyles} ${fullWidth ? " w-full flex justify-center items-center" : " "}`}>
        <div className="pr-2">
            {startIcon}
        </div>
            {text}

        <div className="pl-2">
            {endIcon}
        </div>
        
    </button>
}