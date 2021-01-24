import { Container } from './styles'

interface FilterProps {
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

const FilterField: React.FC<FilterProps> = ({
  id,
  name,
  validation,
  values
}) => {
  return (
    <Container>
      <h1>{name}</h1>

      {values && (
        <select id={id} name={id}>
          {values.map(value => (
            <option key={value.value} value={value.value}>
              {value.name}
            </option>
          ))}
        </select>
      )}

      {id === 'timestamp' && <input type="date" id={id} name={id} />}

      {id === 'limit' && (
        <input
          type="number"
          id={id}
          name={id}
          min={validation.min}
          max={validation.max}
        />
      )}

      {id === 'offset' && <input type="number" id={id} name={id} />}
    </Container>
  )
}

export default FilterField
