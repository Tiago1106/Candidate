import React from 'react';

import { BiLogOut } from "react-icons/bi";

import { Modal, TitleModal, Content, ButtonGlobal, NotInteressGlobal, TextModal } from '../../styles/global'
import { ButtonRadio, RowRadio } from './styles';

function SpaceAvailable({newComponent, newComponentFinish, setSpaceAvailable}) {
  return (
    <Modal>
        <TitleModal>Tem interesse em alguma vaga?</TitleModal>
        <Content>
            <RowRadio>
                <ButtonRadio type="radio" value="Front-end" name="SpaceAvailable" onChange={(e) => setSpaceAvailable(e.target.value)}/>
                <TextModal>Front-end</TextModal>
            </RowRadio>
            <RowRadio>
                <ButtonRadio type="radio" value="Back-end" name="SpaceAvailable" onChange={(e) => setSpaceAvailable(e.target.value)}/>
                <TextModal>Back-end</TextModal>
            </RowRadio>
            <RowRadio>
                <ButtonRadio type="radio" value="PO" name="SpaceAvailable" onChange={(e) => setSpaceAvailable(e.target.value)}/>
                <TextModal>PO</TextModal>
            </RowRadio>
        </Content>
        <ButtonGlobal onClick={() => newComponent()}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default SpaceAvailable;