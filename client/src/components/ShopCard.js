import React from 'react'
import { useHistory } from 'react-router-dom'

const ShopCard = (props) => {
  const history = useHistory()
  console.log(props.image)
  return (
    <div
      className="shop-card"
      onClick={() => history.push(`/shop-page/${props.id}`)}
      style={{ display: 'flex', width: '40vw', cursor: 'pointer' }}
    >
      <img style={{ width: '30%' }} src={props.image} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '70%',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}
      >
        <div>{props.name}</div>
        <div>{props.address}</div>
      </div>
    </div>
  )
}

export default ShopCard
