import React from 'react';

import { BiLogOut } from "react-icons/bi";

import { Modal, TitleModal, Content, ButtonGlobal, NotInteressGlobal, TextModal, TitleContent } from '../../styles/global';
import { TextSelectText } from './styles'

function TestLogic({newComponent, newComponentFinish, setFile, arraySpaceAvailable}) {
  return (
    <Modal>
        <TitleModal>Vaga: {arraySpaceAvailable.name}</TitleModal>
        <Content>
            <TitleContent style={{margin: 0}}>Teste lógico:</TitleContent>
            <TextSelectText>Vizualize aqui</TextSelectText>
            <TextModal style={{ marginTop: 20 }}>Anexe seu teste aqui</TextModal>
            <input type="file" multiple={false} onChange={e => setFile(e.target.files[0])}/>
        </Content>
        <ButtonGlobal onClick={() => newComponent()}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default TestLogic;