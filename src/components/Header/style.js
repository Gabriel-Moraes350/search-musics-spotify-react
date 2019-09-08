import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

export const HeaderMenu = styled.header`
  margin-bottom: 30px;
  div {
    padding: 5px 30px;
  }
`;
export const Logo = styled.img.attrs({
  src: logo,
  alt: 'Logo',
})`
  height: 70px;
  width: 110px;
  margin-right: 20px;
`;
