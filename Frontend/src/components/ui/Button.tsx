export interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon: any;
}

export const Button = () => {
    return <button>Help</button>
}