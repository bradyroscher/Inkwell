import React from 'react'
import { useHistory } from 'react-router-dom'

const ArtistCard = (props) => {
  const history = useHistory()
  console.log(props)
  return (
    <div onClick={() => history.push(`/artist/${props.id}`)}>
      <img style={{ width: '20vw' }} src={props.image} />
      <div>{props.name}</div>
    </div>
  )
}

export default ArtistCard
