import styled from 'styled-components'

export const Card = styled.div`
  height: 7rem;
  width: 250px;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #8cb369;
  box-shadow: 1px 2px 23px -14px rgba(0,0,0,0.66);
-webkit-box-shadow: 1px 2px 23px -14px rgba(0,0,0,0.66);
-moz-box-shadow: 1px 2px 23px -14px rgba(0,0,0,0.66);
`
export const Button = styled(Card)`
  height: 5rem;
  width: 150px;
  margin-left: 25px;
`
