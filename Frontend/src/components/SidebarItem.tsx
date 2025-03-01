import { ReactElement } from "react";

export function SidebarItem({text, icon}: {
    text: string;
    icon: ReactElement;
}){
    return(
        <div className="felx">
            {icon} {text}
        </div>
    );
}

