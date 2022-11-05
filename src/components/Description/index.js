import React from 'react';

import { BiLogOut } from "react-icons/bi";

import { Modal, TitleModal, Content, ButtonGlobal, TextModal, NotInteressGlobal } from '../../styles/global'
// import { Container } from './styles';

function Description({newComponent, newComponentFinish, arraySpaceAvailable}) {
  return (
    <Modal>
        <TitleModal>Vaga: {arraySpaceAvailable.name} </TitleModal>
        <Content>
            <TextModal style={{textAlign: "center"}}>{arraySpaceAvailable.description}</TextModal>
        </Content>
        <ButtonGlobal onClick={() => newComponent()}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default Description;