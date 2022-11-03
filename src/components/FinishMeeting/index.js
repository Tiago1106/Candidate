import React from 'react';

import { Modal, TitleModal, Content, ButtonGlobal, TextModal, TitleContent } from '../../styles/global'
// import { Container } from './styles';

function FinishMeeting({newComponentFinish}) {
  return (
    <Modal>
        <TitleModal>XYZ Tecnologia</TitleModal>
        <Content>
            <TitleContent>Marcaremos uma reunião </TitleContent>
            <TextModal>Obrigado pelo interesse em participar da nossa empresa!</TextModal>
        </Content>
        <ButtonGlobal onClick={() => newComponentFinish()}>Finalizar</ButtonGlobal>
    </Modal>
  );
}

export default FinishMeeting;