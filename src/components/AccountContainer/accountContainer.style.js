import styled from 'styled-components'

export const Container = styled.section`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

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

export const ContainerAccounts = styled.div`
  width: auto;
  height: 20rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
`
