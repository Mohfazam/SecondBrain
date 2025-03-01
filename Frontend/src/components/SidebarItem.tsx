import { ReactElement } from "react";

export function SidebarItem({text, icon}: {
    text: string;
    icon: ReactElement;
}){
    return(
        <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded-xl pl-2 w-[180px] hover:transition-all duration-700">
            <div className="pr-2">
            {icon}
            </div>
            <div className="pr-2">
            {text}
            </div>
        </div>
    );
}

