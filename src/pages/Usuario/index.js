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

function Usuario() {
    const [component, setComponent] = useState('Login')
    
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [spaceAvailable, setSpaceAvailable] = useState('')
  
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
                newComponent={() => setComponent("Mvv")} 
                newComponentFinish={() => setComponent("Thanks")} 
            />
        )}
    </Container>
  );
}

export default Usuario;