/* eslint-disable camelcase */
export async function getAllAccounts() {
  try {
    const response = await fetch(
      'https://api.npoint.io/97d89162575a9d816661'
    ).then(response => response.json())

    const data = await response.cuentas
      .filter(acc => acc.n !== ' ')
      .filter(acc => acc.saldo == parseInt(acc.saldo))
      .filter(acc => acc.moneda === '$' || acc.moneda === 'u$s')
      .filter(
        acc =>
          acc.tipo_letras.toUpperCase() === 'CA' ||
          acc.tipo_letras.toUpperCase() === 'CC'
      )
      .map((acc, i) => {
        return {
          id: i,
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
