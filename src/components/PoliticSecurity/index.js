import React from 'react';

import { BiLogOut } from "react-icons/bi";

import { Modal, TitleModal, Content, ButtonGlobal, NotInteressGlobal, TitleContent } from '../../styles/global';
import { TextSelectText } from './styles'

function PoliticSecurity({newComponent, newComponentFinish}) {
  return (
    <Modal>
        <TitleModal>Vaga: Front-End Senio</TitleModal>
        <Content>
            <TitleContent style={{margin: 0}}>Política de Segurança da Informação:</TitleContent>
            <TextSelectText>Clique aqui para acessar</TextSelectText>
        </Content>
        <ButtonGlobal onClick={() => newComponent()}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default PoliticSecurity;