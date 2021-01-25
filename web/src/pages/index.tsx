import { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'

import formatDate from '../utils/formatDate'

import {
  Container,
  Content,
  FieldContainer,
  Filters,
  Login,
  AccessDenied
} from '../styles'
import FeaturedPlaylists from '../components/FeaturedPlaylists'

interface Playlist {
  name: string
  description: string
  images: {
    url: string
  }[]
  tracks: string
}

interface Featured {
  message: string
  playlists: {
    items: Playlist[]
  }
}

interface Filter {
  id: string
  name: string
  values?: {
    value: string
    name: string
  }[]
  validation?: {
    primitiveType: string
    min?: number
    max?: number
    entityType?: string
    pattern?: string
  }
}

const Home: React.FC = () => {
  const router = useRouter()
  const [spotifyResponseDenied, setSpotifyResponseDenied] = useState(false)
  const [spotifyPlaylists, setSpotifyPlaylists] = useState({} as Featured)
  const [filters, setFilters] = useState<Filter[]>([])
  const [token, setToken] = useState('')

  const [country, setCountry] = useState('BR')
  const [locale, setLocale] = useState('pt_BR')
  const [limit, setLimit] = useState('10')
  const [date, setDate] = useState(formatDate(new Date().toString()))
  const [offset, setOffset] = useState('5')

  useEffect(() => {
    const path = router.asPath
    const [firstParam] = path.split('&')
    const [param, value] = firstParam.split('=')

    if (value === 'access_denied') {
      setSpotifyResponseDenied(true)
      return
    }

    if (param === '/#access_token') {
      setSpotifyResponseDenied(false)
      setToken(value)
      getFilters()
      getPlaylists(value)
    }
  }, [country, locale, date, limit, offset, token])

  const getPlaylists = useCallback(
    async spotifyToken => {
      const response = await axios.get(
        'https://api.spotify.com/v1/browse/featured-playlists',
        {
          params: {
            country,
            locale,
            limit,
            date,
            offset
          },
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + spotifyToken
          },
          data: {}
        }
      )

      console.log(response.data)

      setSpotifyPlaylists(response.data)
    },
    [country, locale, date, limit, offset]
  )

  const getFilters = useCallback(async () => {
    const response = await axios.get(
      'http://www.mocky.io/v2/5a25fade2e0000213aa90776'
    )

    setFilters(response.data.filters)
  }, [])

  return (
    <Container>
      <Head>
        <title>Spotify Playlists</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <h1>Spotify Playlists</h1>

        {spotifyPlaylists.playlists ? (
          <>
            <Filters>
              {filters.map(filter => (
                <FieldContainer key={filter.id}>
                  {filter.id === 'locale' && (
                    <>
                      <label htmlFor={filter.id}>{filter.name}</label>
                      <select
                        id={filter.id}
                        name={filter.id}
                        onChange={e => setLocale(e.target.value)}
                      >
                        {filter.values.map(value => (
                          <option key={value.value} value={value.value}>
                            {value.name}
                          </option>
                        ))}
                      </select>
                    </>
                  )}

                  {filter.id === 'country' && (
                    <>
                      <label htmlFor={filter.id}>{filter.name}</label>
                      <select
                        id={filter.id}
                        name={filter.id}
                        onChange={e => setCountry(e.target.value)}
                      >
                        {filter.values.map(value => (
                          <option
                            key={value.value}
                            value={value.value === 'en_US' ? 'US' : value.value}
                          >
                            {value.name}
                          </option>
                        ))}
                      </select>
                    </>
                  )}

                  {filter.id === 'timestamp' && (
                    <>
                      <label htmlFor={filter.id}>{filter.name}</label>
                      <input
                        type="date"
                        id={filter.id}
                        name={filter.id}
                        onChange={e => setDate(e.target.value)}
                        value={date}
                      />
                    </>
                  )}

                  {filter.id === 'limit' && (
                    <>
                      <label htmlFor={filter.id}>{filter.name}</label>
                      <input
                        type="number"
                        id={filter.id}
                        name={filter.id}
                        min={filter.validation.min}
                        max={filter.validation.max}
                        onChange={e =>
                          e.target.value > '0' && setLimit(e.target.value)
                        }
                        value={limit}
                        contentEditable="false"
                      />
                    </>
                  )}

                  {filter.id === 'offset' && (
                    <>
                      <label htmlFor={filter.id}>{filter.name}</label>
                      <input
                        type="number"
                        id={filter.id}
                        name={filter.id}
                        onChange={e =>
                          e.target.value > '0' && setOffset(e.target.value)
                        }
                        value={offset}
                      />
                    </>
                  )}
                </FieldContainer>
              ))}
            </Filters>

            <FeaturedPlaylists
              playlists={spotifyPlaylists.playlists}
              message={spotifyPlaylists.message}
            />
          </>
        ) : (
          <Login>
            <p>
              Entre com a sua conta do Spotify para visualizar as playlists em
              destaque.
            </p>
            <a href="https://accounts.spotify.com/authorize?client_id=50eb067b28e0491380591d6b7884165d&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token">
              Logar
            </a>
          </Login>
        )}

        {spotifyResponseDenied && (
          <AccessDenied>
            <small>
              É necessáro autorizar sua conta para visualizar as playlists!
            </small>
          </AccessDenied>
        )}
      </Content>
    </Container>
  )
}

export default Home
