import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import data from '../../data/db.json'
import { PersonMiniCard } from '../PersonMiniCard'

function fetchSearchData (id) {
  // YOU MUST CHANGE THE QUERY POSITION
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const searchUrl = `https://torre.co/api/opportunities/${id}`

  useEffect(() => {
    let mounted = true
    setLoading(true)
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const source = Axios.CancelToken.source()
    // this.cancel = axios.CancelToken.soruce()
    const loadData = async () => {
    const callOptions = {
        method: 'GET'
    }
    callOptions.headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http"//localhost:8080',
        'Access-Control-Allow-Credentials': true
    }
    //   delete Axios.defaults.headers.common.Authorization
      const response = await window.fetch(searchUrl, callOptions)
      const data = await response.json()
      if (mounted) {
        const resultNotFoundMsg = !response.data.results.lenght
          ? 'There are no more search results. Try a new search'
          : ''
        setResults(data)
        setMessage(resultNotFoundMsg)
        setLoading(false)
      }
    }
    loadData()

    return () => {
      mounted = false
    }
  }, [])

  return { results, loading, message }
}

export const JobBio = ({ id }) => {
  // const { job } = data[0] //fetchSearchData(id)
//   console.log(data[0])
  return (
    <>
      <div>
        <h3>{data[0].objective}</h3>
        <p>{data[0].commitment.code} or {data[0].opportunity}</p>
        <h3>Skills:</h3>
        {data[0].strengths.map(item =>
          <div key={item.id}>
            {item.name}
          </div>
        )}
        <p>Organization(s) name(s)</p>
        {data[0].organizations.map(item =>
          <div key={item.id}>
            <img src={item.picture} />
            <p>{item.name}</p>
          </div>
        )}
        <h3>Location</h3>
        {data[0].place.location.map(item =>
          <div key={item.id}>
            <p>{item.id}</p>
          </div>
        )}
        <h3>Salary:</h3>
        <p>{data[0].compensation.currency}</p>
        <p>{data[0].compensation.minAmount} - {data[0].compensation.minAmount} / {data[0].compensation.periodicity}</p>
        <h3>Our team</h3>
        {/*  Ill put this in a mini component */}
        {data[0].members.map(item => {
          if (item.visible) {
            return (
              <div key={item.id}>
                <PersonMiniCard {...item.person} />
              </div>)
          }
        })}
        <br />
        <h2>Why us?</h2>
        {data[0].details.map(item =>
          <div key={item.code}>
            <h4>{item.code}</h4>
            <p>{item.content}</p>
          </div>
        )}
      </div>
    </>
  )
}
