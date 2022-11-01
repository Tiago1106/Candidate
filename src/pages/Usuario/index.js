import React, { useState } from 'react';

import { Container } from './styles';

import Login from '../../components/UserRegister'
import Thanks from '../../components/Thanks'
import SpaceAvailable from '../../components/SpaceAvailable'

function Usuario() {
    const [component, setComponent] = useState('Login')
    const [name, setName] = useState('')
  
    return (
    <Container>
        {component == "Thanks" && (
            <Thanks newComponentFinish={() => setComponent("Login")}/>
        )}
        {component == "Login" && (
            <Login newComponent={() => setComponent("SpaceAvailable")} newComponentFinish={() => setComponent("Thanks")}/>
        )}
        {component == "SpaceAvailable" && (
            <SpaceAvailable newComponent={() => setComponent("Description")} newComponentFinish={() => setComponent("Thanks")}/>
        )}
    </Container>
  );
}

export default Usuario;