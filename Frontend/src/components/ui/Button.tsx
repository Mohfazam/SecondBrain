type Variants = "primary" | "secondary";

interface ButtonProps{
    variant: Variants;
    size?: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: () => void;
}

const variantStyles =  {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600",
}

export const Button = (props: ButtonProps) => {
    return <button className={variantStyles[props.variant]}>{props.text}</button>
}