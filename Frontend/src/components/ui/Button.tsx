import { ReactElement } from "react";

type Variants = "primary" | "secondary";


interface ButtonProps{
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: any;
    onClick?: () => void;
}

const variantStyles =  {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600",
}

const defaultStyles = "rounded-md flex";

const defaultSize = {
    "sm" : "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}

export const Button = (props: ButtonProps) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${defaultSize[props.size]}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null } {props.text}
        </button>
}