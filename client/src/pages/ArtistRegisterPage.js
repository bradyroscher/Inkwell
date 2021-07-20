import React from 'react'
import { connect } from 'react-redux'
import { CheckboxToggle } from 'react-rainbow-components'
import {
  SetShopsByQuery,
  SetQuery,
  SetShopName
} from '../store/actions/ShopActions'
import {
  SetArtistAmericanTraditional,
  SetArtistNeoTraditional,
  SetArtistBiomechanical,
  SetArtistJapanese,
  SetArtistWaterColor,
  SetArtistPortrait,
  SetArtistPhotoRealism,
  SetArtistTribal,
  SetArtistGeometric,
  SetArtistOther,
  SetArtistBio,
  SetArtistImage,
  SetArtistLettering
} from '../store/actions/ArtistSignUpActions'
import { SetShopID } from '../store/actions/ArtistSignUpActions'
import { RegisterArtist } from '../services/UserServices'

const mapStateToProps = ({ shopState, artistSignUpState, userState }) => {
  return { shopState, artistSignUpState, userState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleQuery: (text) => dispatch(SetQuery(text)),
    handleSearch: (query) => dispatch(SetShopsByQuery(query)),
    setShopID: (id) => dispatch(SetShopID(id)),
    setShopName: (value) => dispatch(SetShopName(value)),
    handleAmericanTraditional: (value) =>
      dispatch(SetArtistAmericanTraditional(value)),
    handleNeoTraditional: (value) => dispatch(SetArtistNeoTraditional(value)),
    handleBiomechanical: (value) => dispatch(SetArtistBiomechanical(value)),
    handleJapanese: (value) => dispatch(SetArtistJapanese(value)),
    handleWaterColor: (value) => dispatch(SetArtistWaterColor(value)),
    handlePortrait: (value) => dispatch(SetArtistPortrait(value)),
    handlePhotoRealism: (value) => dispatch(SetArtistPhotoRealism(value)),
    handleGeometric: (value) => dispatch(SetArtistGeometric(value)),
    handleTribal: (value) => dispatch(SetArtistTribal(value)),
    handleLettering: (value) => dispatch(SetArtistLettering(value)),
    handleOther: (value) => dispatch(SetArtistOther(value)),
    handleImage: (link) => dispatch(SetArtistImage(link)),
    handleBio: (text) => dispatch(SetArtistBio(text))
  }
}

const ArtistRegisterPage = (props) => {
  console.log(props.shopState)
  console.log(props.artistSignUpState)
  console.log(props.artistSignUpState.geometric)

  const checkBoolean = (state) => {
    if (state === false) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    RegisterArtist(
      {
        image: props.artistSignUpState.image,
        bio: props.artistSignUpState.bio,
        americanTraditional: props.artistSignUpState.americanTraditional,
        neoTraditional: props.artistSignUpState.neoTraditional,
        tribal: props.artistSignUpState.tribal,
        photoRealism: props.artistSignUpState.photoRealism,
        japanese: props.artistSignUpState.japanese,
        portrait: props.artistSignUpState.portrait,
        waterColor: props.artistSignUpState.waterColor,
        biomechanical: props.artistSignUpState.biomechanical,
        geometric: props.artistSignUpState.geometric,
        lettering: props.artistSignUpState.lettering,
        other: props.artistSignUpState.other,
        shopName: props.artistSignUpState.shopNames,
        shop_id: props.artistSignUpState.shopID,
        user_id: parseInt(props.userState.userData.id)
      },
      parseInt(props.userState.userData.id)
    )
    props.history.push(`/artist/${props.userState.userData.id}`)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('click')
    props.handleSearch(props.shopState.query)
  }

  return (
    <div
      style={{
        marginTop: '100px'
      }}
    >
      <div>Image</div>
      <form onSubmit={handleSubmit}>
        <input
          value={props.artistSignUpState.image}
          onChange={(e) => props.handleImage(e.target.value)}
        />
        <div>Bio</div>
        <textarea
          value={props.artistSignUpState.bio}
          onChange={(e) => props.handleBio(e.target.value)}
        />
        <div>American Traditional</div>
        <label className="switch">
          <input
            type="checkbox"
            value={props.artistSignUpState.americanTraditional}
            onClick={() =>
              props.handleAmericanTraditional(
                checkBoolean(props.artistSignUpState.americanTraditional)
              )
            }
          />
          <span className="slider round"></span>
        </label>
        <div>Neo Traditional</div>
        <label className="switch">
          <input
            type="checkbox"
            value={props.artistSignUpState.neoTraditional}
            onClick={() =>
              props.handleNeoTraditional(
                checkBoolean(props.artistSignUpState.neoTraditional)
              )
            }
          />
          <span className="slider round"></span>
        </label>
        <div>Tribal</div>
        <label className="switch">
          <input
            type="checkbox"
            value={props.artistSignUpState.tribal}
            onClick={() =>
              props.handleTribal(checkBoolean(props.artistSignUpState.tribal))
            }
          />
          <span className="slider round"></span>
        </label>
        <div>Photorealism</div>
        <label className="switch">
          <input
            type="checkbox"
            value={props.artistSignUpState.photoRealism}
            onClick={() =>
              props.handlePhotoRealism(
                checkBoolean(props.artistSignUpState.photoRealism)
              )
            }
          />
          <span className="slider round"></span>
        </label>
        <div>japanese</div>
        <label className="switch">
          <input
            type="checkbox"
            value={props.artistSignUpState.japanese}
            onClick={() =>
              props.handleJapanese(
                checkBoolean(props.artistSignUpState.japanese)
              )
            }
          />
          <span className="slider round"></span>
        </label>
        <div>Portrait</div>
        <label className="switch">
          <input
            type="checkbox"
            value={props.artistSignUpState.portrait}
            onClick={() =>
              props.handlePortrait(
                checkBoolean(props.artistSignUpState.portrait)
              )
            }
          />
          <span className="slider round"></span>
        </label>
        <div>geometric</div>
        <label className="switch">
          <input
            type="checkbox"
            value={props.artistSignUpState.geometric}
            onClick={() =>
              props.handleGeometric(
                checkBoolean(props.artistSignUpState.geometric)
              )
            }
          />
          <span className="slider round"></span>
        </label>
        <div>Water Color</div>
        <label className="switch">
          <input
            type="checkbox"
            value={props.artistSignUpState.waterColor}
            onClick={() =>
              props.handleWaterColor(
                checkBoolean(props.artistSignUpState.waterColor)
              )
            }
          />
          <span className="slider round"></span>
        </label>
        <div>Biomechanical</div>
        <label className="switch">
          <input
            type="checkbox"
            value={props.artistSignUpState.biomechanical}
            onClick={() =>
              props.handleBiomechanical(
                checkBoolean(props.artistSignUpState.biomechanical)
              )
            }
          />
          <span className="slider round"></span>
        </label>
        <div>Lettering</div>
        <label className="switch">
          <input
            type="checkbox"
            value={props.artistSignUpState.lettering}
            onClick={() =>
              props.handleLettering(
                checkBoolean(props.artistSignUpState.lettering)
              )
            }
          />
          <span className="slider round"></span>
        </label>
        <div>Let us any other styles you know!</div>
        <textarea
          value={props.artistSignUpState.other}
          onChange={(e) => props.handleOther(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div>
        First things first we gotta pick your shop! look at the list below or
        search for it. Don't see your shop? go ahead and register it!
      </div>
      <button onClick={(e) => props.history.push('/shop-register')}>
        Register Shop
      </button>
      <form onSubmit={handleSearchSubmit} style={{ display: 'flex' }}>
        <input
          value={props.shopState.query}
          onChange={(e) => props.handleQuery(e.target.value)}
        />
        <div className="filter-button">search</div>
      </form>
      <select
        onChange={(e) => {
          props.setShopID(e.target.value)
        }}
        style={{
          display: props.shopState.shops.length ? 'flex' : 'none'
        }}
      >
        <option default></option>
        {props.shopState.shops.length
          ? props.shopState.shops.map((shop, index) => (
              <option key={index} value={shop.id}>
                {shop.name}
                {shop.address}
              </option>
            ))
          : null}
      </select>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistRegisterPage)
