import React from 'react';

import { BiLogOut } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

import { Modal, TitleModal, Content, ButtonGlobal, NotInteressGlobal, TextModal, TitleContent } from '../../styles/global'
// import { Container } from './styles';

function Salary({newComponent, newComponentFinish, arraySpaceAvailable}) {
  return (
    <Modal>
        <TitleModal>Vaga: {arraySpaceAvailable.name}</TitleModal>
        <Content>
            <TitleContent>Salario Inicial: R${arraySpaceAvailable.salary.salary}</TitleContent>
            <TextModal><FaCircle size={6} color='#2D2D2D' style={{marginRight: 5}}/>3 meses: R${arraySpaceAvailable.salary.monthOne}</TextModal>
            <TextModal><FaCircle size={6} color='#2D2D2D' style={{marginRight: 5}}/>12 meses: R${arraySpaceAvailable.salary.monthTwo}</TextModal>
            <TextModal><FaCircle size={6} color='#2D2D2D' style={{marginRight: 5}}/>Fixo: R${arraySpaceAvailable.salary.last}</TextModal>
        </Content>
        <ButtonGlobal onClick={() => newComponent()}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default Salary;