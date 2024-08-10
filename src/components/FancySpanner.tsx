import React from 'react'
import Spanner from './Spanner'
import { cn } from '@/lib/utils';

function FancySpanner({ text, className }: { text: string; className?: string }) {
    return (
        <div className={cn("select-none", className)}>
            <Spanner spanClass="text-stroke-1" className="absolute -top-full text-center" text={text} />
            <Spanner className="drop-shadow-2xl text-center" text={text} />
            <Spanner spanClass="text-stroke-1" className="-bottom-full absolute text-center" text={text} />
        </div>
    )
}

export default FancySpanner
