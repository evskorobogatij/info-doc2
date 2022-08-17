import { HttpClient } from './http-client'

export const client = new HttpClient<string>({
  securityWorker: (accessToken) =>
    accessToken ? { headers: { Authorization: `Bearer ${accessToken}` } } : {}
})
