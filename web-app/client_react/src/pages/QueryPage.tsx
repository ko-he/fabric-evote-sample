import React from 'react'
import { queriesService } from '../services'

type QueryPageProps = {}

const QueryPage: React.FC<QueryPageProps> = _props => {
  const [queriesData, setQueriesData] = React.useState()

  const handleClick = React.useCallback(
    async() => {
      const responseData = await queriesService.all()
      setQueriesData(responseData)
    },
    [setQueriesData]
  )

  return(
    <>
      <p>QueryPage</p>
      <div><button onClick={handleClick}>query all</button></div>
      {
        queriesData &&
        <code>
          {JSON.stringify(queriesData, null, 2)}
        </code>
      }
    </>
  )
}

export default QueryPage