export async function getAllAccounts() {
  try {
    const response = await fetch(
      'https://api.npoint.io/97d89162575a9d816661'
    ).then((response) => response.json())

  
    const data = response.cuentas
      .filter((acc) => acc.n !== ' ')
      .filter((acc) => acc.moneda === '$' || acc.moneda === 'u$s')
      .filter(
        (acc) =>
          acc.tipo_letras.toUpperCase() === 'CA' ||
          acc.tipo_letras.toUpperCase() === 'CC'
      )

      const fullMock = [...data, ...data]
    return fullMock
  } catch (e) {
    console.error(e)
  }
}
