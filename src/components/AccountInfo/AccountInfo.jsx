import { useRoute } from 'wouter'

import { ContainerInfo } from './accountInfo.style'
import useAccountStore from '../../store'
import { useEffect } from 'react'

export default function AccountInfo() {
  const setDetail = useAccountStore((state) => state.setDetail)
  const { saldo, accType, n } = useAccountStore((state) => state.accDetail)
  const [, params] = useRoute('/:id')
  const { id } = params
  useEffect(() => {
    setDetail(id)
  }, [id])

  return (
    <ContainerInfo>
      <div className='texts'>
        <p>Consulta de Saldo</p>
        <h1>Este es tu saldo actual</h1>
      </div>
      <div className='info'>
        <ul>
          <li>{`Saldo de la cuenta: ${saldo}`}</li>
          <li>{`Tipo de cuenta: ${accType}`}</li>
          <li>{`Número de cuenta: ${n}`}</li>
        </ul>
      </div>
    </ContainerInfo>
  )
}
