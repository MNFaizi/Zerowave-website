import Image from "next/image";
import MotionDiv from "./animation/div";

export default function Construction() {
    return (
        <div className="container flex justify-center m-auto">
            <MotionDiv index={1}>
                <Image src='https://png.pngtree.com/png-clipart/20211024/original/pngtree-coming-soon-poster-illustration-png-image_6869906.png' width={600} height={600} alt="coming soon" />
            </MotionDiv>
        </div>
    )
}