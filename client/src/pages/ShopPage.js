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
  if (shopState.selectedShop.name) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '10vh'
        }}
      >
        <div className="shop-header" style={{ width: '55vw', display: 'flex' }}>
          <img
            style={{
              width: '35%',
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px',
              marginRight: '20px'
            }}
            src={shopState.selectedShop.image}
          />
          <div
            style={{
              width: '65%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start'
            }}
          >
            <div style={{ fontSize: '45px' }}>
              {shopState.selectedShop.name}
            </div>
            <div>{shopState.selectedShop.address}</div>
          </div>
        </div>
        <div
          className="artist-map-header"
          style={{ fontSize: '40px', margin: '4vh' }}
        >
          {' '}
          Shop Artists{' '}
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
