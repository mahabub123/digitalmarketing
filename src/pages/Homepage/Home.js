import React from 'react'
import {InfoSection,Footer} from '../../components/index'
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour ,footerObj} from './Data'

const Home = () => {
    return (
        <>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
        <Footer {...footerObj}/>
        </>
    )
}

export default Home
