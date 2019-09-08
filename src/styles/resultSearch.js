import styled from 'styled-components';
import { MdFavoriteBorder } from 'react-icons/md';

export const Container = styled.section`
  margin: 10px auto;
  padding: 10px;
  width: 100%;
  max-width: 900px;
  min-height: 100%;
  display: block;
  color: #fff;
  h2 {
    font-size: 25px;
  }
  & > h3 {
    border-bottom: 1px solid #fff;
    width: 100%;
  }

  & > div > h3 {
    border-bottom: 1px solid #fff;
    width: 100%;
  }

  input {
    width: 100%;
    height: 50px;
    border-radius: 30px;
    font-size: 20px;
    color: #333;
    padding: 10px 50px 10px 10px;
    background: #eee;
  }

  .select-input {
    display: flex;
    flex-direction: row;
    margin: 15px 0;
    align-items: center;

    label {
      margin-right: 15px;
    }

    #typeSelect {
      border-radius: 15px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    text-align: center;
  }
`;

export const ResultGrid = styled.div`
  max-width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
`;

export const ResultElement = styled.div`
  max-width: 250px;
  padding: 10px 0;
  margin: 0 auto;
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
  }

  h3 {
    font-size: 15px;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
    width: auto;
  }

  img {
    width: 100%;
    height: 250px;
    margin-bottom: 5px;
  }

  p {
    min-height: 20px;
  }

  div {
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div {
      span {
        margin-left: 3px;
        text-align: center;
      }
    }
  }
`;

export const Favorite = styled(MdFavoriteBorder)`
  font-size: 25px;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: ${props => (props.favorited === 'true' ? 'red' : 'white')};
  &:hover {
    color: red;
  }
`;

export const Banner = styled.div`
  min-height: 250px;
  width: 100%;
  margin: 20px auto;
  padding: 10px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  img {
    max-width: 300px;
    max-height: 300px;
  }

  div {
    margin-left: 15px;
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
