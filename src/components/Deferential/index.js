import React from 'react';

import { BiLogOut } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

import { Modal, TitleModal, Content, ButtonGlobal, NotInteressGlobal, TextModal, TitleContent } from '../../styles/global'
// import { Container } from './styles';

function Deferential({newComponent, newComponentFinish, arraySpaceAvailable}) {
  return (
    <Modal>
        <TitleModal>Vaga: {arraySpaceAvailable.name}</TitleModal>
        <Content>
            <TitleContent>Diferenciais para função:</TitleContent>
            {arraySpaceAvailable.deferential.map((e) => (
              <TextModal key={e}><FaCircle size={6} color='#2D2D2D' style={{marginRight: 5}}/>{e}</TextModal>
            ))}
        </Content>
        <ButtonGlobal onClick={() => newComponent()}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default Deferential;