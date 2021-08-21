import { useQuery } from '@apollo/client'

const useGraphQuery = (query, key, variables = {}) => {
  const { data, error, loading } = useQuery(query, {
    variables,
  })

  return [data?.[key], error, loading]
}

export default useGraphQuery
