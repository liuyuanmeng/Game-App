import axios from 'axios'
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: '12aa46225a1041edaa1519c6120ecf7c'
  }
})