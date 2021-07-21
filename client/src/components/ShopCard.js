import React from 'react'
import { useHistory } from 'react-router-dom'

const ShopCard = (props) => {
  const history = useHistory()
  console.log(props.image)
  return (
    <div
      className="shop-card"
      onClick={() => history.push(`/shop-page/${props.id}`)}
      style={{
        display: 'flex',
        width: '45vw',
        cursor: 'pointer',
        marginBottom: '30px'
      }}
    >
      <img
        style={{
          width: '30%',
          borderBottomLeftRadius: '15px',
          borderTopLeftRadius: '15px',
          marginRight: '20px'
        }}
        src={props.image}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '70%',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}
      >
        <div style={{ fontSize: '40px' }}>{props.name}</div>
        <div>{props.address}</div>
      </div>
    </div>
  )
}

export default ShopCard
