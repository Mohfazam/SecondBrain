import { ShareIcon } from "../icons/ShareIcon"

interface cardProps{
    title: string,
    link: string,
    type: "Youtube" | "x"
}

export function Card({title, link, type}: cardProps){
    return(
        <div className="p-4 bg-white rounded-md border-gray-100 max-w-72 border">
            <div className="flex justify-between ">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon />
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                    <div className="pr-2 text-gray-500">
                        <ShareIcon />
                    </div>
                </div>
            </div>

            
            <div className="pt-4">
            {type === "Youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            
            {type === "x" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
            </div>
            
        </div>
    )
}