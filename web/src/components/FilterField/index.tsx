import { useCallback, useRef } from 'react'
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
  const inputRef = useRef<HTMLInputElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)

  return (
    <Container>
      <h1>{name}</h1>

      {values && (
        <select id={id} name={id} ref={selectRef}>
          {values.map(value => (
            <option key={value.value} value={value.value}>
              {value.name}
            </option>
          ))}
        </select>
      )}

      {id === 'timestamp' && (
        <input type="date" id={id} name={id} ref={inputRef} />
      )}

      {id === 'limit' && (
        <input
          type="number"
          id={id}
          name={id}
          min={validation.min}
          max={validation.max}
          ref={inputRef}
        />
      )}

      {id === 'offset' && (
        <input type="number" id={id} name={id} ref={inputRef} />
      )}
    </Container>
  )
}

export default FilterField
