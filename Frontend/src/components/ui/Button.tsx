import { ReactElement } from "react";

interface Buttonprops{
    varient: "primary" | "secondary";
    text: string;
    startIcon: ReactElement;
    endIcon: ReactElement;
}

export function Button(props: Buttonprops){

}