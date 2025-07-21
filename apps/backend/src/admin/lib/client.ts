export const mercurQuery = async (
  url: string,
  {
    method,
    body,
    query,
    headers
  }: {
    method: 'GET' | 'POST' | 'DELETE'
    body?: object | string
    query?: Record<string, string | number>
    headers?: { [key: string]: string }
  }
) => {
  const bearer = (await window.localStorage.getItem('medusa_auth_token')) || ''
  const params = Object.entries(query || {}).reduce(
    (acc, [key, value], index) => {
      if (value && value !== undefined) {
        const queryLength = Object.values(query || {}).filter(
          (i) => i && i !== undefined
        ).length
        acc += `${key}=${value}${index + 1 <= queryLength ? '&' : ''}`
      }
      return acc
    },
    ''
  )

  const finalBody = body instanceof FormData ? body : JSON.stringify(body)

  const reqHeader =
    body instanceof FormData
      ? {
          authorization: `Bearer ${bearer}`,
          ...headers
        }
      : {
          authorization: `Bearer ${bearer}`,
          'Content-Type': 'application/json',
          ...headers
        }

  const response = await fetch(`${url}${params && `?${params}`}`, {
    method: method,
    headers: reqHeader,
    body: finalBody ?? null
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Nieznany błąd serwera')
  }

  return response.json()
}
