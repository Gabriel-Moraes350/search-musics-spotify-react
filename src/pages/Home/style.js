import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

import home from '../../assets/img/home.png';

export const Container = styled.div`
  background-image: url(${home});
  background-size: cover;
  background-position: center;
  min-width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    min-width: 100%;

    h1 {
      color: #fff;
      font-size: 28px;
      padding: 28px;
      max-width: 500px;
      text-decoration: underline;
      text-align: center;
    }
  }
`;

export const Login = styled.a`
  display: block;
  margin: 50px auto;
  width: 200px;
  height: 40px;
  background-color: rgb(122, 189, 0);
  border-radius: 30px;
  color: RGBA(231, 252, 255, 1);
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 40px;
  text-align: center;
`;

export const Form = styled.form`
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  max-height: 150px;
  padding: 15px 2%;
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: row;
  align-items: center;

  input {
    width: 100%;
    height: 50px;
    border-radius: 30px;
    font-size: 20px;
    color: #333;
    padding: 10px 50px 10px 10px;
    background: #eee;
  }
`;

export const SearchIcon = styled(MdSearch)`
  color: #111;
  font-size: 40px;
  position: absolute;
  right: 7%;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    font-size: 43px;
  }
`;
