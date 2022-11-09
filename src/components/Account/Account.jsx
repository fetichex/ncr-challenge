import { Link } from 'wouter'

import { Card } from './account.style'
import { filterAccType } from '../../utils/utils'

export default function Account({ t, n, i }) {
  return (
    <>
      <Link href={i} role='link'>
        <Card>
          <p data-testid='t'>{`${filterAccType(t)}`}</p>
          <p data-testid='n'>{`Nro. ${n}`}</p>
        </Card>
      </Link>
    </>
  )
}
