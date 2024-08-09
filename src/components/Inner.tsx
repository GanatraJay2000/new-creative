import React from 'react'
import HStairs from './PageTransitions/HStairs'
import VBanner from './PageTransitions/VBanner'

function Inner({ children }: { children: React.ReactNode }) {
    return (
        <VBanner>
            {children}
        </VBanner>
    )
}

export default Inner
