import { SidebarItem } from "./SidebarItem";
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"

export function Sidebar() {
    return(
    <div className="h-screen bg-white border-r w-72 fixed top-0 left-0">
        <div className="pt-4">
        <SidebarItem text="Twitter" icon={<TwitterIcon />}/>
        <SidebarItem text="Youtube" icon={<YoutubeIcon />}/>
        </div>
    </div>
    );
}