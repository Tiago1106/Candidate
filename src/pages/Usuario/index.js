import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import Login from '../../components/UserRegister'
import Thanks from '../../components/Thanks'
import SpaceAvailable from '../../components/SpaceAvailable'
import Description from '../../components/Description';
import Requirement from '../../components/Requirement';
import Deferential from '../../components/Deferential';
import Salary from '../../components/Salary';
import Mvv from '../../components/MVV';
import TestLogic from '../../components/TestLogic';
import PoliticSecurity from '../../components/PoliticSecurity';
import Punishment from '../../components/Punishment';
import TestInterpretation from '../../components/TestInterpretation';
import TestTechnical from '../../components/TestTechnical';
import FinishMeeting from '../../components/FinishMeeting';


function Usuario() {
    const [component, setComponent] = useState('Login')
    
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [spaceAvailable, setSpaceAvailable] = useState('')

    const [fileLogic, setFileLogic] = useState()
    const [fileInterpretation, setFileInterpretation] = useState()
    const [fileTechinical, setFileTechinical] = useState()
  
    return (
    <Container>
        {component == "Thanks" && (
            <Thanks newComponentFinish={() => setComponent("Login")}/>
        )}
        {component == "Login" && (
            <Login 
                newComponent={() => setComponent("SpaceAvailable")} 
                newComponentFinish={() => setComponent("Thanks")}
                setEmail={setEmail} valueEmail={email}
                setCpf={setCpf} valueCpf={cpf}
                setName={setName} valueName={name}
                setPhone={setPhone} valuePhone={phone}
            />
        )}
        {component == "SpaceAvailable" && (
            <SpaceAvailable 
                newComponent={() => setComponent("Description")} 
                newComponentFinish={() => setComponent("Thanks")}
                setSpaceAvailable={setSpaceAvailable}    
            />
        )}
        {component == "Description" && (
            <Description 
                newComponent={() => setComponent("Requirement")} 
                newComponentFinish={() => setComponent("Thanks")} 
            />
        )}
        {component == "Requirement" && (
            <Requirement 
                newComponent={() => setComponent("Deferential")} 
                newComponentFinish={() => setComponent("Thanks")} 
            />
        )}
        {component == "Deferential" && (
            <Deferential 
                newComponent={() => setComponent("Salary")} 
                newComponentFinish={() => setComponent("Thanks")} 
            />
        )}
        {component == "Salary" && (
            <Salary 
                newComponent={() => setComponent("Mvv")} 
                newComponentFinish={() => setComponent("Thanks")} 
            />
        )}
        {component == "Mvv" && (
            <Mvv 
                newComponent={() => setComponent("PoliticSecurity")} 
                newComponentFinish={() => setComponent("Thanks")} 
            />
        )}
        {component == "PoliticSecurity" && (
            <PoliticSecurity 
                newComponent={() => setComponent("Punishment")} 
                newComponentFinish={() => setComponent("Thanks")} 
            />
        )}
        {component == "Punishment" && (
            <Punishment 
                newComponent={() => setComponent("TestLogic")} 
                newComponentFinish={() => setComponent("Thanks")} 
            />
        )}
        {component == "TestLogic" && (
            <TestLogic 
                newComponent={() => setComponent("TestInterpretation")} 
                newComponentFinish={() => setComponent("Thanks")} 
                setFile={setFileLogic}
            />
        )}
        {component == "TestInterpretation" && (
            <TestInterpretation 
                newComponent={() => setComponent("TestTechnical")} 
                newComponentFinish={() => setComponent("Thanks")} 
                setFile={setFileInterpretation}
            />
        )}
        {component == "TestTechnical" && (
            <TestTechnical 
                newComponent={() => setComponent("FinishMeeting")} 
                newComponentFinish={() => setComponent("Thanks")} 
                setFile={setFileTechinical}
            />
        )}
        {component == "FinishMeeting" && (
            <FinishMeeting 
                newComponentFinish={() => setComponent("Login")}
            />
        )}
    </Container>
  );
}

export default Usuario;