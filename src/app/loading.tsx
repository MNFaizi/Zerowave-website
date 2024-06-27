import Image from "next/image";

export default function Loading() {
    return (
        <div role="status" className="m-auto">
            <Image src={'/Zerowave-Crop.png'} height={150} width={150} alt="zerowave logo" className="animate-spin"/>
            <span className="sr-only">Loading...</span>
        </div>
    )
}