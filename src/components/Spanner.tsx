import { cn } from '@/lib/utils'
import React from 'react'

function Spanner({ text, className, spanClass }: { text: string; className?: string; spanClass?: string }) {
    return (
        <div className={cn("", className)}>
            {
                text.split('').map((char, index) => {
                    return (
                        <span key={index} className={cn("", spanClass)}>{char}</span>
                    )
                })
            }
        </div>
    )
}

export default Spanner
