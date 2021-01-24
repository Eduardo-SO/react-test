import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/browse/featured-playlists'
})

export default api
