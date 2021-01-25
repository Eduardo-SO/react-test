import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2.4rem;
  border-radius: 0.8rem;
  padding: 3.2rem;
  background: #121212;

  h2 {
    margin-bottom: 1.6rem;
  }
`

export const Playlists = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`

export const PlaylistItem = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.6rem;
  border-radius: 0.4rem;
  background-color: #181818;

  transition: background-color 0.2s ease-out;

  img {
    max-width: 100%;
    margin-bottom: 1.6rem;
  }

  p {
    margin-top: 0.4rem;
    color: #b3b3b3;
    font-size: 1.4rem;
  }

  &:hover {
    background-color: #2a2a2a;
  }
`
