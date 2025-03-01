import { SidebarItem } from "./SidebarItem";
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import {Brain} from 'lucide-react'

export function Sidebar() {
    return(
    <div className="h-screen bg-white border-r w-72 fixed top-0 left-0 pl-6">
        <div className="flex text-2xl pt-4 py-4 items-center">
        <div className="pr-2 text-purple-600">
        <Brain size={32} /></div> Second Brain
        </div>
        <div className="pt-2">
        <SidebarItem text="Twitter" icon={<TwitterIcon />}/>
        <SidebarItem text="Youtube" icon={<YoutubeIcon />}/>
        </div>
    </div>
    );
}