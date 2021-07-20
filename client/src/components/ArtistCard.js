import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const ArtistCard = (props) => {
  const [average, setAverage] = useState('')
  const history = useHistory()

  const getAverage = () => {
    let sum = 0
    props.reviews.forEach((review) => {
      sum += parseInt(review.rating)
    })
    return Math.round((sum / props.reviews.length) * 10) / 10
  }

  useEffect(() => setAverage(getAverage()), [])
  console.log(props)
  return (
    <div
      className="artist-card"
      style={{
        display: 'flex',
        width: '40vw',
        cursor: 'pointer',
        marginTop: '20px'
      }}
      onClick={() => history.push(`/artist/${props.id}`)}
    >
      <img
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '1000px',
          margin: '25px'
        }}
        src={props.image}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}
      >
        <div style={{ fontSize: '25px' }}>{props.name}</div>
        <div style={{ display: props.reviews.length ? 'flex' : 'none' }}>
          Average Rating: {average}
        </div>
        <div>{props.reviews.length} Reviews</div>
      </div>
    </div>
  )
}

export default ArtistCard
