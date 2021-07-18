import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ReviewCard from '../components/ReviewCard'
import PostCard from '../components/PostCard'
import { SetSelectedArtist } from '../store/actions/UserActions'
import {
  SetReviews,
  SetReviewText,
  SetAverage
} from '../store/actions/ReviewActions'
import {
  SetPostImage,
  SetPostText,
  AddPostToPosts
} from '../store/actions/PostActions'
import { PostReview } from '../services/ReviewServices'
import { SubmitPost } from '../services/PostServices'

const mapStateToProps = ({ shopState, postState, userState, reviewState }) => {
  return { shopState, postState, userState, reviewState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: (id) => dispatch(SetSelectedArtist(id)),
    handleReviewText: (text) => dispatch(SetReviewText(text)),
    addReview: (array) => dispatch(SetReviews(array)),
    handlePostText: (text) => dispatch(SetPostText(text)),
    handlePostImage: (link) => dispatch(SetPostImage(link)),
    addPost: (array) => dispatch(AddPostToPosts(array)),
    setAverage: (num) => dispatch(SetAverage(num))
  }
}

const ArtistPage = (props) => {
  const { userState, reviewState, postState } = props

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    PostReview({
      rating: 5,
      text: reviewState.text,
      postedBy: userState.userData.name,
      user_id: userState.userData.id,
      artist_id: userState.selectedArtist.user.Artist.id
    })
    props.addReview([
      ...reviewState.reviews,
      {
        rating: 5,
        text: reviewState.text,
        postedBy: userState.userData.name,
        user_id: userState.userData.id,
        artist_id: userState.selectedArtist.user.Artist.id
      }
    ])
  }

  const handlePostSubmit = (e) => {
    e.preventDefault()
    SubmitPost({
      image: postState.image,
      text: postState.text,
      postedBy: userState.userData.name,
      artist_id: userState.selectedArtist.user.Artist.id
    })
    props.addPost([
      ...postState.posts,
      {
        image: postState.image,
        text: postState.text,
        postedBy: userState.userData.name,
        artist_id: userState.selectedArtist.user.Artist.id
      }
    ])
  }

  console.log(userState, reviewState, postState)

  const getArtist = () => {
    props.getProfile(props.match.params.id)
    let sum = 0
    reviewState.reviews.forEach((review) => {
      sum += parseInt(review.rating)
    })
    props.setAverage(sum / reviewState.reviews.length)
  }

  useEffect(() => {
    getArtist()
  }, [])

  if (userState.selectedArtist.user) {
    return (
      <div>
        <img src={userState.selectedArtist.user.Artist.image} />
        <div>{userState.selectedArtist.user.name}</div>
        <div>{userState.selectedArtist.user.Artist.bio}</div>
        <div>Average Rating: {reviewState.average}</div>
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
          <form onSubmit={handlePostSubmit}>
            <input
              value={postState.image}
              onChange={(e) => props.handlePostImage(e.target.value)}
            />
            <textarea
              value={postState.text}
              onChange={(e) => props.handlePostText(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>

        {/* ######### POST MAP ###### */}

        {postState.posts.map((post, index) => (
          <PostCard key={index} text={post.text} image={post.image} />
        ))}

        {/* ####### REVIEW FORM ######### */}
        <div
          style={{
            display:
              userState.selectedArtist.user.id !== userState.userData.id
                ? 'flex'
                : 'none'
          }}
        >
          <form onSubmit={handleReviewSubmit}>
            <input
              value={reviewState.text}
              onChange={(e) => props.handleReviewText(e.target.value)}
            />
            <button>SUBMIT</button>
          </form>
        </div>

        {/* ##### REVIEW MAP ##### */}

        {reviewState.reviews.map((review, index) => (
          <ReviewCard key={index} text={review.text} rating={review.rating} />
        ))}
      </div>
    )
  } else {
    return <div>loading</div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage)
