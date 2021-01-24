import { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import axios from 'axios'

import { Container } from '../styles'
import FeaturedPlaylists from '../components/FeaturedPlaylists'

interface SpotifyResponse {
  access_token?: string
  token_type?: string
  expires_in?: string
}

interface Playlist {
  name: string
  description: string
  images: string[]
  tracks: string
}

interface Featured {
  message: string
  playlists: {
    items: Playlist[]
  }
}

const Home: React.FC = () => {
  const router = useRouter()
  const [spotifyResponse, setSpotifyResponse] = useState({} as SpotifyResponse)
  const [spotifyResponseDenied, setSpotifyResponseDenied] = useState(false)

  const [spotifyPlaylists, setSpotifyPlaylists] = useState({} as Featured)

  useEffect(() => {
    const path = router.asPath

    const [full_access_token, full_token_type, full_expires_in] = path.split(
      '&'
    )

    if (full_access_token && full_token_type && full_expires_in) {
      const [, access_token] = full_access_token.split('=')
      const [, token_type] = full_token_type.split('=')
      const [, expires_in] = full_expires_in.split('=')

      setSpotifyResponseDenied(false)
      setSpotifyResponse({
        access_token,
        token_type,
        expires_in
      })

      getPlaylists(access_token)
      return
    }

    const [, error] = path.split('=')
    error && setSpotifyResponseDenied(true)
  }, [])

  const getPlaylists = useCallback(
    async token => {
      const response = await axios(
        'https://api.spotify.com/v1/browse/featured-playlists',
        {
          params: {
            country: 'BR',
            locale: 'pt_BR',
            limit: '10',
            offset: '5'
          },
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
          },
          data: {},
          method: 'GET'
        }
      )

      setSpotifyPlaylists(response.data)
    },
    [spotifyResponse]
  )

  return (
    <Container>
      <Head>
        <title>Spotify playlists</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Spotify playlists</h1>

      {spotifyResponseDenied && <h1>Acesso negado!</h1>}

      {spotifyPlaylists.playlists ? (
        <FeaturedPlaylists
          playlists={spotifyPlaylists.playlists}
          message={spotifyPlaylists.message}
        />
      ) : (
        <a href="https://accounts.spotify.com/authorize?client_id=50eb067b28e0491380591d6b7884165d&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token">
          Logar
        </a>
      )}
    </Container>
  )
}

export default Home
