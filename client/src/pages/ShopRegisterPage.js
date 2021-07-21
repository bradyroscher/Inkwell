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
    props.addShop(obj)
    history.goBack()
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="shop-register-form" style={{ marginTop: '10vh' }}>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          onSubmit={handleSubmit}
        >
          <div style={{ display: 'flex', margin: '20px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '5px'
              }}
            >
              <div>Shop Name</div>
              <input
                value={props.shopState.shopName}
                style={{ width: '15vw' }}
                onChange={(e) => {
                  props.handleName(e.target.value)
                }}
                className="input"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '5px'
              }}
            >
              <div>Image</div>
              <input
                value={props.shopState.shopImage}
                style={{ width: '15vw' }}
                onChange={(e) => {
                  props.handleImage(e.target.value)
                }}
                className="input"
              />
            </div>
          </div>
          <div>Address</div>
          <input
            value={props.shopState.shopAddress}
            style={{ width: '70%' }}
            onChange={(e) => {
              props.handleAddress(e.target.value)
            }}
            className="input"
          />
          <button
            style={{ color: 'white', margin: '20px' }}
            className="filter-button"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopRegisterPage)
