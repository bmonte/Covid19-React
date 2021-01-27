import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 12px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Logotipo = styled.img`
  @media only screen and (max-width: 500px) {
    width: 80%;
    margin: 0 10%;
  }
`;
