import axios from 'axios'
export default axios.create({
  baseURL: 'https://api.openbrewerydb.org/v1',
  // params: {
  //   key: '6cdf86163e7e4ac09a7e382b9a0c25c8',
  // },
})