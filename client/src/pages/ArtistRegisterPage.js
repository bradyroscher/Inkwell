import React from 'react'
import { connect } from 'react-redux'
import { CheckboxToggle, Column } from 'react-rainbow-components'
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

  return props.artistSignUpState.shopID === '' ? (
    <div
      style={{
        marginTop: '10vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div className="artist-shop-search">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ width: '70%', padding: '20px', fontSize: '20px' }}>
            Are you a Tattoo artist? Let's get you set up so you can start
            making posts!
          </div>
          <div style={{ paddingBottom: '20px' }}>
            Search for your shop below and see if it's registerd
          </div>
        </div>

        <form
          onSubmit={handleSearchSubmit}
          style={{
            display: 'flex',
            width: '80%',
            justifyContent: 'center',
            marginBottom: '20px'
          }}
        >
          <input
            className="input"
            style={{ width: '50%' }}
            value={props.shopState.query}
            onChange={(e) => props.handleQuery(e.target.value)}
          />
          <div
            style={{ display: 'flex', alignItems: 'center' }}
            className="filter-button"
          >
            search
          </div>
        </form>
      </div>
      <div style={{ marginTop: '30px' }}>
        <div
          className="filter-button"
          onClick={() => props.history.push('/shop-register')}
          style={{
            display: 'flex',
            backgroundColor: '#778899',
            fontSize: '20px',
            padding: '15px',
            justifyContent: 'center',
            marginBottom: '30px'
          }}
        >
          Not here? Go ahead and register it!
        </div>
        {props.shopState.shops.length
          ? props.shopState.shops.map((shop, index) => (
              <div
                key={index}
                className="shop-card"
                onClick={() => props.setShopID(shop.id)}
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
                    borderTopLeftRadius: '15px',
                    borderBottomLeftRadius: '15px',
                    marginRight: '20px'
                  }}
                  src={shop.image}
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
                  <div style={{ fontSize: '50px' }}>{shop.name}</div>
                  <div>{shop.address}</div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  ) : (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        className="main-form"
        style={{
          marginTop: '10vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '70vw'
        }}
      >
        <button
          className="filter-button"
          style={{
            display: 'flex',
            color: 'white',
            alignSelf: 'flex-end',
            marginRight: '20px',
            marginTop: '20px'
          }}
          onClick={() => props.setShopID('')}
        >
          Back
        </button>
        <div style={{ margin: '15px', fontSize: '20px' }}>
          Almost there! Give us some info about you.
        </div>
        <form onSubmit={handleSubmit}>
          <div className="toggle-grid">
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
              <div>Tribal</div>
              <label className="switch">
                <input
                  type="checkbox"
                  value={props.artistSignUpState.tribal}
                  onClick={() =>
                    props.handleTribal(
                      checkBoolean(props.artistSignUpState.tribal)
                    )
                  }
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
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
            </div>
            <div>
              <div>Japanese</div>
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
            </div>
            <div>
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
            </div>
            <div>
              <div>Geometric</div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '20vh'
              }}
            >
              <div>Bio</div>
              <textarea
                className="input"
                value={props.artistSignUpState.bio}
                style={{
                  width: '20vw',
                  height: '100%',
                  marginBottom: '35px',
                  marginRight: '10px'
                }}
                onChange={(e) => props.handleBio(e.target.value)}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div>Image</div>
              <input
                className="input"
                style={{
                  width: '12vw',
                  marginLeft: '10px',
                  marginBottom: '10px'
                }}
                value={props.artistSignUpState.image}
                onChange={(e) => props.handleImage(e.target.value)}
              />
              <div className="filter-button">Submit</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistRegisterPage)
