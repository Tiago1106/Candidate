import React from 'react';

import { BiLogOut } from "react-icons/bi";

import { Modal, TitleModal, Content, ButtonGlobal, NotInteressGlobal } from '../../styles/global'
import { Input } from './styled'

function UserRegister({newComponent, setNameParams}) {
  return (
    <Modal>
        <TitleModal>XYZ Tecnologia</TitleModal>
        <Content>
            <Input placeholder='Email' />
            <Input placeholder='CPF' />
            <Input placeholder='Nome Completo'/>
            <Input placeholder='Celular' />
        </Content>
        <ButtonGlobal onClick={() => newComponent()}>Confirmar</ButtonGlobal>
        <NotInteressGlobal>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default UserRegister;