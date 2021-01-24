import { useEffect } from 'react'
import { Container } from './styles'

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

const FeaturedPlaylists: React.FC<Featured> = ({ playlists, message }) => {
  useEffect(() => {
    console.log(playlists, message)
  }, [])

  return (
    <Container>
      <h1>{message}</h1>

      {playlists.items.map((playlist, index) => (
        <div key={index}>
          <strong>{playlist.name}</strong>
          <p>{playlist.description}</p>
        </div>
      ))}
    </Container>
  )
}

export default FeaturedPlaylists
