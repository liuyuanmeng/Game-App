import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'
import useData from './useData'

 export interface Game {
   id: number
   name: string
   background_image: string
   metacritic: number
 }


const useGames = () => useData<Game>('/games')

  
export default useGames
