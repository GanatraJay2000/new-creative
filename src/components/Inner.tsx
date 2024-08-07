import React from 'react'
import HStairs from './PageTransitions/HStairs'

function Inner({ children }: { children: React.ReactNode }) {
    return (
        <HStairs>
            {children}
        </HStairs>
    )
}

export default Inner
