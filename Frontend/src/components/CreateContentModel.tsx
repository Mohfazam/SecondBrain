import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"

export function CreateContentModel({ open, onClose }) {
    
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 bg-opacity-60 flex justify-center">

            <div className="flex flex-col justify-center ">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end hover:cursor-pointer">
                        <div onClick={onClose}>
                        <CrossIcon />
                        </div>
                    </div>

                    <div>
                        <Input placeholder={"title"}/>
                        <Input placeholder={"Link"}/>
                    </div>
                    <div className="flex justify-center"> 
                    <Button varient="primary" text="Submit" />
                    </div>
                </span>
            </div>

        </div>}
    </div>
}
