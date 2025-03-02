import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import { useRef, useState } from "react";
import { BACKEND_URL } from '../config'
import axios from "axios";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModel({ open, onClose }: any) {

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addcontent() {

        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        const contentResponse = await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type

        }, {
            headers:{
                "Authorization":localStorage.getItem("token")
            }

            
        });
        onClose();

    }

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
                        <Input ref={titleRef} placeholder={"title"} />
                        <Input ref={linkRef} placeholder={"Link"} />
                    </div>
                    <div>
                        <h2 className="p-4">Content Type</h2>
                        <div className="flex p-6 gap-x-2.5">
                            <Button text="Youtube" varient={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Youtube)
                            }}></Button>
                            <Button text="Twitter" varient={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Twitter)
                            }}></Button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={addcontent} varient="primary" text="Submit" />
                    </div>
                </span>
            </div>

        </div>}
    </div>
}
