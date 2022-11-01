import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 600px;
  height: 500px;
  
  padding: 30px;
  border-radius: 30px;

  background-color: #FFF;
`;

export const TitleModal = styled.span`
  font-weight: 600;
  font-size: 30px;
  color: #2D2D2D;
`

export const TextModal = styled.span`
  font-size: 22px;
  color: #2D2D2D;
`

export const ButtonGlobal = styled.button`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  background-color: #FF5700;
  color: #FFF;

  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  border: 0;

  cursor: pointer;
`

export const NotInteressGlobal = styled.span`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  color: #FF5700;
  margin: 15px 0;

  display: flex;
  align-items: center;

  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100%;
`


