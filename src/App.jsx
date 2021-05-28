
import React from 'react'
import { GameScreen } from './components/game/GameScreen'
import { Navbar } from './components/ui/Navbar'

export const App = ({name}) => {
    return (
        <>
            <Navbar/>
            <GameScreen/>
            
        </>
    )
}
