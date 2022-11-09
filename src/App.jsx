import { useEffect } from 'react'
import { Route } from 'wouter'

import useAccountStore from './store'
import { ROUTES } from './utils/utils'
import Layout from './components/Layout'
import Global from './global.style'

export default function App() {
  const getAcc = useAccountStore((state) => state.getAcc)
  useEffect(() => {
    getAcc('http://localhost:3000/')
  }, [])

  return (
    <>
      <Global />
      <section className='App'>
        <Layout id='layout'>
          {ROUTES.map(({ path, component }) => (
            <Route key={path} path={path} component={component}></Route>
          ))}
        </Layout>
      </section>
    </>
  )
}
