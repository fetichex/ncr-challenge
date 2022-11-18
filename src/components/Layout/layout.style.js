import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Container = styled.main`
  display: grid;

  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(8, 1fr);

  grid-template-areas:
    'label0 label0 label0 label0 label0 label0 label0 label0'
    'label1 label1 label1 label1 label1 label1 label1 label1'
    'label2 label2 label2 label2 label2 label2 label2 label2'
    'label3 . . . . . . .';

  height: 768px;
  width: 1024px;

  h1 {
    font-size: 3rem;
  }
`
export const Header = styled.header`
  display: flex;
  height: 5%;
  padding-left: 25px;
  justify-content: flex-start;
  align-items: center;
  height: 6rem;
  background-color: #8cb369;
  grid-area: label0;
  box-shadow: 0px 10px 23px -14px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 10px 23px -14px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 10px 23px -14px rgba(0, 0, 0, 0.58);

  h1 {
    margin: 0;
  }
`
export const Title = styled.section`
  grid-area: label1;
  height: 20%;
  margin: 2rem 0;

  .texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 3rem;
    margin-top: 1rem;
    margin-bottom: 0;
    padding-inline: 6px;
  }
`

export const Main = styled.section`
  grid-area: label2;
  height: 65%;
`
export const Footer = styled.footer`
  display: inline-block1;
  align-items: center;
  justify-content: center;
  height: 10%;
  width: 150px;
  grid-area: label3;
`
