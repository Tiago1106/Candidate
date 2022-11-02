import React from 'react';

import { BiLogOut } from "react-icons/bi";

import { Modal, TitleModal, Content, ButtonGlobal, NotInteressGlobal, TextModal, TitleContent } from '../../styles/global'
// import { Container } from './styles';

function Mvv({newComponent, newComponentFinish}) {
  return (
    <Modal>
        <TitleModal>Vaga: Front-end Sênior </TitleModal>
        <Content style={{overflowY: 'scroll', maxHeight: "100%", paddingTop: 65}}>
            <TitleContent style={{margin: 0}}>Missão:</TitleContent>
            <TextModal>Proporcionar os melhores materiais ao cliente, oferecendo-os por meio de canais físicos e digitais, sempre com o intuito de tornar a experiência de consumo ágil e garantir que ela seja a mais prazerosa possível, ajustando-a às necessidades de cada cliente e buscando ultrapassar as suas expectativas.</TextModal>
            <TitleContent style={{margin: 0}}>Visão:</TitleContent>
            <TextModal>Tornar-se referência no setor de materiais de construção em São Paulo</TextModal>
            <TitleContent style={{margin: 0}}>Valor:</TitleContent>
            <TextModal>confiança, comprometimento, qualidade, paixão por atender bem.</TextModal>
        </Content>
        <ButtonGlobal onClick={() => newComponent()} style={{minHeight: 50, marginTop: 10}}>Confirmar</ButtonGlobal>
        <NotInteressGlobal onClick={() => newComponentFinish()}>Não tenho interesse <BiLogOut size={20} color='#FF5700' style={{marginLeft: 5}}/></NotInteressGlobal>
    </Modal>
  );
}

export default Mvv;