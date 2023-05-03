// import useData from "./useData"
import genres from '../data/genres'


export interface Genre {
  id: number
  name: string
  image_background: string
}

// const useGenres = () => useData<Genre>('./genres')
// use object here in to reduce the impact of this hooker we dont change the object in genrelist object
const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres
