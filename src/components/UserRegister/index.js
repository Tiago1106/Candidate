import React from 'react';

import { BiLogOut } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";

import { Modal, TitleModal, Content, ButtonGlobal, NotInteressGlobal } from '../../styles/global'
import { Input } from './styled'

function UserRegister({
  newComponent, 
  newComponentFinish, 
  valueEmail, setEmail,
  valueCpf, setCpf,
  valueName, setName,
  valuePhone, setPhone,
}) {
  return (
    <Modal>
        <TitleModal>XYZ Tecnologia</TitleModal>
        <Content>
            <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={valueEmail}/>
            <Input placeholder='CPF' onChange={(e) => setCpf(e.target.value)} value={valueCpf}/>
            <Input placeholder='Nome Completo' onChange={(e) => setName(e.target.value)} value={valueName}/>
            <Input placeholder='Celular' onChange={(e) => setPhone(e.target.value)} value={valuePhone}/>
        </Content>
        <ButtonGlobal onClick={() => newComponent()}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Acessar como ADMIN <RiAdminLine size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default UserRegister;