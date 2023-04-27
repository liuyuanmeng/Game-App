import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

 export interface Game {
   id: number
   name: string
   background_image: string
 }
 // only strict results to be retuned depending on data structure (array of objects)
 interface FetchGamesResponse {
   count: number
   results: Game[]
 }


const useGames = () => {

  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    apiClient
      .get<FetchGamesResponse>('/games', {signal: controller.signal})
      .then((res) => {
        setGames(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      })
    return () => controller.abort()
  }, [])

  return { games, error, isLoading }
}
export default useGames
