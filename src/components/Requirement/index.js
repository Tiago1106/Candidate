import React from 'react';

import { BiLogOut } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

import { Modal, TitleModal, Content, ButtonGlobal, NotInteressGlobal, TextModal, TitleContent } from '../../styles/global'
// import { Container } from './styles';

function Requirement({newComponent, newComponentFinish}) {
  return (
    <Modal>
        <TitleModal>Vaga: Front-end Sênior </TitleModal>
        <Content>
            <TitleContent>Requisito da função:</TitleContent>
            <TextModal><FaCircle size={6} color='#2D2D2D' style={{marginRight: 5}}/>ReactJs</TextModal>
            <TextModal><FaCircle size={6} color='#2D2D2D' style={{marginRight: 5}}/>ReactNative</TextModal>
            <TextModal><FaCircle size={6} color='#2D2D2D' style={{marginRight: 5}}/>TypeScript</TextModal>
            <TextModal><FaCircle size={6} color='#2D2D2D' style={{marginRight: 5}}/>Versionamento com Git</TextModal>
        </Content>
        <ButtonGlobal onClick={() => newComponent()}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default Requirement;