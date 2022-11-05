import React, {useState} from 'react';

import { BiLogOut } from "react-icons/bi";

import { Modal, TitleModal, Content, ButtonGlobal, NotInteressGlobal, TextModal } from '../../styles/global'
import { ButtonRadio, RowRadio } from './styles';

function SpaceAvailable({newComponent, newComponentFinish, options, setArraySpaceAvailable}) {
  const [next, setNext] = useState(true)
  
  return (
    <Modal>
        <TitleModal>Tem interesse em alguma vaga?</TitleModal>
        <Content>
            {options.map((e) => (
                <RowRadio key={e.name}>
                    <ButtonRadio type="radio" value={e.name} name="SpaceAvailable" onChange={(event) => {setNext(false); setArraySpaceAvailable(e)}}/>
                    <TextModal>{e.name}</TextModal>
                </RowRadio>
            ))}
        </Content>
        <ButtonGlobal onClick={() => newComponent()} disabled={next}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default SpaceAvailable;