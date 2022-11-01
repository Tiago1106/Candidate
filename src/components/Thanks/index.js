import React from 'react';

import { Modal, TitleModal, Content, ButtonGlobal, TextModal } from '../../styles/global'
// import { Container } from './styles';

function Thanks({newComponentFinish}) {
  return (
    <Modal>
        <TitleModal>XYZ Tecnologia</TitleModal>
        <Content>
            <TextModal>Obrigado pelo interesse em participar da nossa empresa!</TextModal>
        </Content>
        <ButtonGlobal onClick={() => newComponentFinish()}>Finalizar</ButtonGlobal>
    </Modal>
  );
}

export default Thanks;