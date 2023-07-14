import Image from 'next/image'
interface Props {
    image : string
    height?: number
}


function  ServerIcon({image, height = 50} : Props) {
    return (
        <Image
        src = {image}
        alt = ""
        height = {height} 
        width = {height}
        className = "h-12 cursor-pointer rounded-full transition-all duration-100 ease-out hover:rounded-2xl"
        />
        
          
    )
}
export  default ServerIcon


// Still need to do some digging on how the height was passed
// image prop sent to serverIcon

