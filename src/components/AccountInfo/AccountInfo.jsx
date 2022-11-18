import { useEffect } from 'react'
import { useRoute } from 'wouter'

import useAccountStore from '../../store'
import { ContainerInfo } from './accountInfo.style'

export default function AccountInfo() {
  const setDetail = useAccountStore((state) => state.setDetail)
  const { saldo, accType, n } = useAccountStore((state) => state.accDetail)
  const [, params] = useRoute('/:id')
  const { id } = params

  useEffect(() => {
    setDetail(parseInt(id))
  }, [])

  return (
    <ContainerInfo>
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
