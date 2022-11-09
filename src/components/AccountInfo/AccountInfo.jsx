import { useLocation } from 'wouter'

import { ContainerInfo } from './accountInfo.style'
import useAccountStore from '../../store'
import { filterAccType } from '../../utils/utils'

export default function AccountInfo() {
  const accounts = useAccountStore((state) => state.accounts)

  const [location] = useLocation()
  const pL = parseInt(location.split('/')[1])
  const { tipo_letras, saldo, n } = accounts?.find((_, i) => i === pL)

  return (
    <ContainerInfo>
      <div className='texts'>
        <p>Consulta de Saldo</p>
        <h1>Este es tu saldo actual</h1>
      </div>
      <div className='info'>
        <ul>
          <li>{`Saldo de la cuenta: ${saldo}`}</li>
          <li>{`Tipo de cuenta: ${filterAccType(tipo_letras)}`}</li>
          <li>{`Número de cuenta: ${n}`}</li>
        </ul>
      </div>
    </ContainerInfo>
  )
}
