import React from 'react'
import Spanner from './Spanner'
import { cn } from '@/lib/utils';

function FancySpanner({ text, className }: { text: string; className?: string }) {
    return (
        <div className={cn("select-none", className)}>
            <Spanner spanClass="text-stroke-1" className="scale-90 text-center" text={text} />
            <Spanner className="-my-72 drop-shadow-2xl [font-size:20rem] text-center" text={text} />
            <Spanner spanClass="text-stroke-1" className="scale-90 text-center" text={text} />
        </div>
    )
}

export default FancySpanner
