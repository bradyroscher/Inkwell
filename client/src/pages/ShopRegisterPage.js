import React from 'react'
import {
  SetShopName,
  SetShopImage,
  SetShopAddress,
  AddPostedShop
} from '../store/actions/ShopActions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const mapStateToProps = ({ shopState, userState }) => {
  return { shopState, userState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleName: (text) => dispatch(SetShopName(text)),
    handleImage: (link) => dispatch(SetShopImage(link)),
    handleAddress: (text) => dispatch(SetShopAddress(text)),
    addShop: (obj) => dispatch(AddPostedShop(obj))
  }
}

const ShopRegisterPage = (props) => {
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
      name: props.shopState.shopName,
      address: props.shopState.shopAddress,
      latitude: 'n/a',
      longitude: 'n/a',
      image: props.shopState.shopImage,
      createdBy: props.userState.userData.id
    }
    console.log(obj)
    props.addShop(obj)
    history.goBack()
  }

  console.log(props.shopState)
  console.log(props.userState.userData.id)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={props.shopState.shopName}
          onChange={(e) => {
            props.handleName(e.target.value)
          }}
        />
        <input
          value={props.shopState.shopAddress}
          onChange={(e) => {
            props.handleAddress(e.target.value)
          }}
        />
        <input
          value={props.shopState.shopImage}
          onChange={(e) => {
            props.handleImage(e.target.value)
          }}
        />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopRegisterPage)
