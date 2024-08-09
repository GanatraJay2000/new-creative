import React from 'react'
import Spanner from './Spanner'

function FancySpanner({ text }: { text: string }) {
    return (
        <>
            <Spanner spanClass="text-stroke-1" className="scale-90 text-center" text={text} />
            <Spanner className="-my-72 drop-shadow-2xl [font-size:20rem] text-center" text={text} />
            <Spanner spanClass="text-stroke-1" className="scale-90 text-center" text={text} />
        </>
    )
}

export default FancySpanner
