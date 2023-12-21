'use client'
import { motion } from 'framer-motion'

export default function MotionDiv({children, index} : {children : React.ReactNode; index: number}){
    return (
        <>
            <motion.div
                animate= {{opacity: 1}}
                transition={{
                    ease: 'linear',
                    duration : 1,
                    delay: index * 0.2
                }}
                initial= {{opacity: 0}}
            >
                {children}
            </motion.div>
        </>
    )
}