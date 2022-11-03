import React from 'react';

import { BiLogOut } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

import { Modal, TitleModal, Content, ButtonGlobal, NotInteressGlobal, TextModal, TitleContent } from '../../styles/global'

function Punishment({newComponent, newComponentFinish}) {
  return (
    <Modal>
        <TitleModal>Vaga: Front-end Sênior </TitleModal>
        <Content>
            <TitleContent>Punições:</TitleContent>
            <TextModal><FaCircle size={6} color='#2D2D2D' style={{marginRight: 5}}/>Desligamento</TextModal>
            <TextModal><FaCircle size={6} color='#2D2D2D' style={{marginRight: 5}}/>Multa</TextModal>
            <TextModal><FaCircle size={6} color='#2D2D2D' style={{marginRight: 5}}/>Advertência</TextModal>
        </Content>
        <ButtonGlobal onClick={() => newComponent()}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default Punishment;