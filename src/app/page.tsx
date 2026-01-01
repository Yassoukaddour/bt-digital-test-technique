"use client";

import {
    Columns,
    Column,
    Container,
    Hero,
    Section,
    Text,
    Title, Link, Image, Card, CardImage, CardContent
} from '@trilogy-ds/react';
// import Steps from './components/steps/Steps';
import Reparation from './components/reparation/Reparation';
import FirstFrame from './components/firstFrame/FirstFrame';
import SecondFrame from './components/secondFrame/SecondFrame';
import FourthFrame from './components/fourthFrame/FourthFrame';
import FifthFrame from './components/fifthFrame/FifthFrame';
import SixthFrame from './components/sixthFrame/SixthFrame';
import SeventhFrame from './components/seventhFrame/SeventhFrame';
import EightFrame from './components/eightFrame/EightFrame';
import NinthFrame from './components/ninthFrame/NinthFrame';
import TenthFrame from './components/tenthFrame/TenthFrame';
import EleventhFrame from './components/eleventhFrame/EleventhFrame';
import Recyclage from './components/recyclage/Recyclage';
import Steps from './components/steps/Steps';

export default function Page() {
    return (
        <div >
        {/* <Steps /> */}
        <FirstFrame />
        <Steps />
        <SecondFrame />
        <Reparation />
        <FourthFrame />
        <FifthFrame />
        <SixthFrame />
        <SeventhFrame />
        <EightFrame />
        <NinthFrame />
        <TenthFrame />
        <EleventhFrame />
        <Recyclage />
        </div>
    );
}
