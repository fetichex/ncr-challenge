import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  height: 25rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const ContainerAccounts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
`
