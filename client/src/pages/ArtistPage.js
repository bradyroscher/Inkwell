import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { SetSelectedArtist } from '../store/actions/UserActions'

const mapStateToProps = ({ shopState, artistSignUpState, userState }) => {
  return { shopState, artistSignUpState, userState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: (id) => dispatch(SetSelectedArtist(id))
  }
}

const ArtistPage = (props) => {
  const { userState } = props

  console.log(userState)

  useEffect(() => {
    props.getProfile(props.match.params.id)
  }, [])

  if (userState.selectedArtist.user) {
    return (
      <div>
        <img src={userState.selectedArtist.user.Artist.image} />
        <div>{userState.selectedArtist.user.name}</div>
        <div>{userState.selectedArtist.user.Artist.bio}</div>
        <div
          style={{
            display: userState.selectedArtist.user.Artist.americanTraditional
              ? 'flex'
              : 'none'
          }}
        >
          American Traditional
        </div>
        <div
          style={{
            display: userState.selectedArtist.user.Artist.neoTraditional
              ? 'flex'
              : 'none'
          }}
        >
          Neo Traditional
        </div>
        <div
          style={{
            display: userState.selectedArtist.user.Artist.geometric
              ? 'flex'
              : 'none'
          }}
        >
          Geometric
        </div>
        <div
          style={{
            display: userState.selectedArtist.user.Artist.biomechanical
              ? 'flex'
              : 'none'
          }}
        >
          Biomechanical
        </div>
        <div
          style={{
            display: userState.selectedArtist.user.Artist.waterColor
              ? 'flex'
              : 'none'
          }}
        >
          Water Color
        </div>
        <div
          style={{
            display: userState.selectedArtist.user.Artist.tribal
              ? 'flex'
              : 'none'
          }}
        >
          Tribal
        </div>
        <div
          style={{
            display: userState.selectedArtist.user.Artist.photoRealism
              ? 'flex'
              : 'none'
          }}
        >
          Photo Realism
        </div>
        <div
          style={{
            display: userState.selectedArtist.user.Artist.japanese
              ? 'flex'
              : 'none'
          }}
        >
          Japanese
        </div>
        <div
          style={{
            display: userState.selectedArtist.user.Artist.portrait
              ? 'flex'
              : 'none'
          }}
        >
          Portrait
        </div>
        <div>{userState.selectedArtist.user.Artist.other}</div>

        {/*  ###### POST FEATURE RENDER ######  */}
        <div
          style={{
            display:
              userState.selectedArtist.user.id === userState.userData.id
                ? 'flex'
                : 'none'
          }}
        >
          HI hehe
        </div>
      </div>
    )
  } else {
    return <div>loading</div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage)
