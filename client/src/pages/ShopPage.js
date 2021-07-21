import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { SetSelectedShop } from '../store/actions/ShopActions'
import ArtistCard from '../components/ArtistCard'

const mapStateToProps = ({ shopState }) => {
  return { shopState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setShop: (id) => dispatch(SetSelectedShop(id))
  }
}

const ShopPage = (props) => {
  const { shopState } = props

  useEffect(() => {
    props.setShop(props.match.params.id)
  }, [])
  console.log(shopState)
  if (shopState.selectedShop.name) {
    return (
      <div>
        <div style={{ width: '50vw', display: 'flex' }}>
          <img
            style={{
              width: '35%',
              borderTopLeftRadius: '15px',
              borderBottomRightRadius: '15px'
            }}
            src={shopState.selectedShop.image}
          />
          <div
            stlyle={{
              width: '65%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <h1>{shopState.selectedShop.name}</h1>
            <div>{shopState.selectedShop.address}</div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {shopState.selectedShop.Artists.map((artist, index) => (
            <ArtistCard
              key={index}
              name={artist.User.name}
              image={artist.image}
              reviews={artist.Reviews}
              id={artist.User.id}
            />
          ))}
        </div>
      </div>
    )
  } else {
    return <div>loading</div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
