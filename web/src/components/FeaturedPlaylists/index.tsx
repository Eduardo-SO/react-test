import { Container, Playlists, PlaylistItem } from './styles'

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

const FeaturedPlaylists: React.FC<Featured> = ({ playlists, message }) => {
  return (
    <Container>
      <h2>{message}</h2>

      <Playlists>
        {playlists.items.map((playlist, index) => (
          <PlaylistItem key={index}>
            <img src={playlist.images[0].url} alt={playlist.name} />
            <div>
              <strong>{playlist.name}</strong>
              <p>{playlist.description}</p>
            </div>
          </PlaylistItem>
        ))}
      </Playlists>
    </Container>
  )
}

export default FeaturedPlaylists
