import React, { useState } from 'react';

import { Container } from './styles';

import Login from '../../components/UserRegister'

function Usuario() {
    const [component, setComponent] = useState('Login')
    const [name, setName] = useState('')
  
    return (
    <Container>
        {component == "Login" && (
            <Login newComponent={() => setComponent("Teste")} setNameParams={(text) => console.log(text)}/>
        )}
        {component == "Teste" && (
            <span>Teste</span>
        )}
    </Container>
  );
}

export default Usuario;