import styled from 'styled-components'

export const Card = styled.div`
  height: 12rem;
  width: 12rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.s < 0 ? '#F44336' : '#AED581')};
  -webkit-box-shadow: -7px 7px 13px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -7px 7px 13px -7px rgba(0, 0, 0, 0.75);
  box-shadow: -7px 7px 13px -7px rgba(0, 0, 0, 0.75);
`
export const Button = styled(Card)`
  height: 5rem;
  width: 150px;
  margin-left: 25px;
`
