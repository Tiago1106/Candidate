import React from 'react';

import { BiLogOut } from "react-icons/bi";

import { Modal, TitleModal, Content, ButtonGlobal, NotInteressGlobal, TextModal } from '../../styles/global'
import { ButtonRadio, RowRadio } from './styles';

function SpaceAvailable({newComponent, newComponentFinish}) {
  return (
    <Modal>
        <TitleModal>XYZ Tecnologia</TitleModal>
        <Content>
            <RowRadio>
                <ButtonRadio type="radio" value="Front-end" name="SpaceAvailable" />
                <TextModal>Front-end</TextModal>
            </RowRadio>
            <RowRadio>
                <ButtonRadio type="radio" value="Back-end" name="SpaceAvailable" />
                <TextModal>Back-end</TextModal>
            </RowRadio>
            <RowRadio>
                <ButtonRadio type="radio" value="PO" name="SpaceAvailable" />
                <TextModal>PO</TextModal>
            </RowRadio>
        </Content>
        <ButtonGlobal onClick={() => newComponent()}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default SpaceAvailable;