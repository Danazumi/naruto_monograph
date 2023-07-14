import Image from "next/image"
import moment from "moment"
interface MessageProps {
  id: number;
  message: string;
  timestamp: string;
  name: string;
  avatarurl: string;
}




function Message ({id,message, timestamp , name, avatarurl}: MessageProps){
    return ( 
        <div className="flex items-center p-1 pl-5 my-5 hover:
        bg-neutral-400 group">

        <Image
        key = {id}
        src = {avatarurl}
        alt = ""
        width={50}
        height={50} 
        className="h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl"/>
        <div className="flex flex-col">
            <h4 className="flex items-center space-x-2 font-medium"> 
                <span className="hover:underline text-white text-sm cursor-pointer">
                    {name}
                </span>
                <span className="text-xs">{timestamp} </span>
                
            </h4>
            <p className="text-sm">{message}</p>

        </div>
        
        
        </div>
    )
}
export default Message