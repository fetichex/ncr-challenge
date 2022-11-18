import { Link } from 'wouter'

import { Card } from './account.style'

export default function Account({ t, n, id, s }) {
  return (
    <>
      <Link href={id} role='link'>
        <Card s={s}>
          <p data-testid='t'>{`${t}`}</p>
          <p data-testid='n'>{`Nro. ${n}`}</p>
        </Card>
      </Link>
    </>
  )
}
