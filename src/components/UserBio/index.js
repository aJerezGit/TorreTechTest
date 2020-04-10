import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function fetchSearchData (id) {
  // YOU MUST CHANGE THE QUERY POSITION
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const searchUrl = `https://bio.torre.co/api/bios/${id}`

  let mounted = true
  const source = Axios.CancelToken.source()
  const loadData = async () => {
    const response = await Axios.get(searchUrl, {
      CancelToken: source.token
    })
    if (mounted) {
      const resultNotFoundMsg = !response.data.results.lenght
        ? 'There are no more search results. Try a new search'
        : ''
      setResults(response)
      setMessage(resultNotFoundMsg)
      setLoading(false)
    }
  }
  useEffect(() => {
    setLoading(true)
    // this.cancel = axios.CancelToken.soruce()
    loadData()

    return () => {
      mounted = false
    }
  }, [results])

  return { results, loading, message }
}

export const UserBio = ({ id }) => {
  const { user, loading, message } = fetchSearchData(id)
  console.log(user)

  if (loading) {
    return 'Cargando...'
  }

  return (!loading &&
    <>
      <div>
        <h2>User</h2>
      </div>
    </>
  )
}
