import React from 'react';

import { BiLogOut } from "react-icons/bi";

import { Modal, TitleModal, Content, ButtonGlobal, TextModal, NotInteressGlobal } from '../../styles/global'
// import { Container } from './styles';

function Description({newComponent, newComponentFinish}) {
  return (
    <Modal>
        <TitleModal>Vaga: Front-end Sênior </TitleModal>
        <Content>
            <TextModal style={{textAlign: "center"}}>Descrição da Vaga: Realizar atendimento ao cliente para identificação de suas necessidades e planejamento das ações corretivas. Treinar e capacitar os usuários do sistema.</TextModal>
        </Content>
        <ButtonGlobal onClick={() => newComponent()}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default Description;