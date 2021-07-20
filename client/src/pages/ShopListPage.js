import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  SetShopsByQuery,
  SetShops,
  SetQuery
} from '../store/actions/ShopActions'
import ShopCard from '../components/ShopCard'

const mapStateToProps = ({ shopState }) => {
  return { shopState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleQuery: (text) => dispatch(SetQuery(text)),
    handleSearch: (query) => dispatch(SetShopsByQuery(query)),
    setShops: () => dispatch(SetShops())
  }
}

const ShopListPage = (props) => {
  const { setShops } = props

  console.log(props.shopState)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('click')
    props.handleSearch(props.shopState.query)
  }

  useEffect(() => {
    setShops()
  }, [setShops])

  return (
    <div
      style={{
        marginTop: '10vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw'
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          value={props.shopState.query}
          onChange={(e) => props.handleQuery(e.target.value)}
        />
        <button>search</button>
      </form>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {props.shopState.shops.map((shop, index) => (
          <ShopCard
            key={index}
            name={shop.name}
            address={shop.address}
            image={shop.image}
            id={shop.id}
          />
        ))}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopListPage)
