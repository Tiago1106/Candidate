import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import Login from '../../components/UserRegister'
import Thanks from '../../components/Thanks'
import SpaceAvailable from '../../components/SpaceAvailable'

function Usuario() {
    const [component, setComponent] = useState('Login')
    
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
  
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
            <SpaceAvailable newComponent={() => setComponent("Description")} newComponentFinish={() => setComponent("Thanks")}/>
        )}
    </Container>
  );
}

export default Usuario;