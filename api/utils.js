/* eslint-disable camelcase */
export async function getAllAccounts() {
  const getId = () => Math.random().toString(36).replace('0.', '')
  try {
    const response = await fetch(
      'https://api.npoint.io/97d89162575a9d816661'
    ).then(response => response.json())

    const data = await response.cuentas
      .filter(acc => acc.n !== ' ')
      .filter(acc => acc.moneda === '$' || acc.moneda === 'u$s')
      .filter(
        acc =>
          acc.tipo_letras.toUpperCase() === 'CA' ||
          acc.tipo_letras.toUpperCase() === 'CC'
      )
      .map(acc => {
        return {
          id: getId(),
          e: acc.e,
          n: acc.n,
          t: acc.t,
          saldo: acc.saldo,
          moneda: acc.moneda,
          accType:
            acc.tipo_letras.toUpperCase() === 'CA'
              ? 'Caja de Ahorros'
              : 'Cuenta Corriente'
        }
      })

    return data
  } catch (e) {
    console.error(e)
  }
}
