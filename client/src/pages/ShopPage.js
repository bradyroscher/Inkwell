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
        <img src={shopState.selectedShop.image} />
        <h1>{shopState.selectedShop.name}</h1>
        <div>{shopState.selectedShop.address}</div>
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
