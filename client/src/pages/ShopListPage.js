import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  SetShopsByQuery,
  SetShops,
  SetQuery
} from '../store/actions/ShopActions'

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={props.shopState.query}
          onChange={(e) => props.handleQuery(e.target.value)}
        />
        <button>search</button>
      </form>
      {props.shopState.shops.map((shop, index) => (
        <div
          key={index}
          onClick={() => props.history.push(`/shop-page/${shop.id}`)}
        >
          <div>{shop.name}</div>
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopListPage)
