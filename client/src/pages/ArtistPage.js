import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ReviewCard from '../components/ReviewCard'
import PostCardArtistPage from '../components/PostCardArtistPage'
import { SetArtistId, SetSelectedArtist } from '../store/actions/UserActions'
import {
  SetReviews,
  SetReviewText,
  SetAverage,
  SetRating,
  DeleteReview
} from '../store/actions/ReviewActions'
import {
  SetPostImage,
  SetPostText,
  AddPostToPosts,
  SetPostType,
  RemovePost
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
    handleRating: (num) => dispatch(SetRating(num)),
    addReview: (array) => dispatch(SetReviews(array)),
    handlePostText: (text) => dispatch(SetPostText(text)),
    handlePostImage: (link) => dispatch(SetPostImage(link)),
    addPost: (array) => dispatch(AddPostToPosts(array)),
    setAverage: (num) => dispatch(SetAverage(num)),
    handleType: (value) => dispatch(SetPostType(value)),
    deleteReview: (index) => dispatch(DeleteReview(index)),
    deletePost: (index) => dispatch(RemovePost(index)),
    setArtistID: (id) => dispatch(SetArtistId(id))
  }
}

const ArtistPage = (props) => {
  const { userState, reviewState, postState } = props

  const handleArtistID = () => {
    if (userState.userData) {
    }
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    PostReview({
      rating: reviewState.reviewRating,
      text: reviewState.text,
      postedBy: userState.userData.name,
      user_id: userState.userData.id,
      artist_id: userState.selectedArtist.user.Artist.id
    })
    props.addReview([
      ...reviewState.reviews,
      {
        rating: reviewState.reviewRating,
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
      style: postState.type,
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
  }

  const getAverage = () => {
    let sum = 0
    console.log(reviewState.reviews)
    if (!reviewState.reviews.length) {
      props.setAverage('No reviews yet!')
    } else {
      reviewState.reviews.forEach((review) => {
        sum += parseInt(review.rating)
      })
      props.setAverage(Math.round((sum / reviewState.reviews.length) * 10) / 10)
    }
  }

  useEffect(() => {
    getAverage()
  }, [reviewState.reviews])

  useEffect(() => {
    getArtist()
  }, [])

  return userState.selectedArtist.user &&
    userState.selectedArtist.user.Artist ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{ display: 'flex', width: '100%', marginTop: '75px' }}>
        <div style={{ width: '50%' }}>
          <img
            style={{ width: '80%' }}
            src={userState.selectedArtist.user.Artist.image}
          />
        </div>
        <div style={{ width: '50%' }}>
          <div style={{ fontSize: '80px' }}>
            {userState.selectedArtist.user.name}
          </div>
          <div>Average Rating: {reviewState.average}</div>
          <div className="style-grid">
            <div
              className="style"
              style={{
                display: userState.selectedArtist.user.Artist
                  .americanTraditional
                  ? 'flex'
                  : 'none'
              }}
            >
              American Traditional
            </div>
            <div
              className="style"
              style={{
                display: userState.selectedArtist.user.Artist.neoTraditional
                  ? 'flex'
                  : 'none'
              }}
            >
              Neo Traditional
            </div>
            <div
              className="style"
              style={{
                display: userState.selectedArtist.user.Artist.geometric
                  ? 'flex'
                  : 'none'
              }}
            >
              Geometric
            </div>
            <div
              className="style"
              style={{
                display: userState.selectedArtist.user.Artist.biomechanical
                  ? 'flex'
                  : 'none'
              }}
            >
              Biomechanical
            </div>
            <div
              className="style"
              style={{
                display: userState.selectedArtist.user.Artist.waterColor
                  ? 'flex'
                  : 'none'
              }}
            >
              Water Color
            </div>
            <div
              className="style"
              style={{
                display: userState.selectedArtist.user.Artist.tribal
                  ? 'flex'
                  : 'none'
              }}
            >
              Tribal
            </div>
            <div
              className="style"
              style={{
                display: userState.selectedArtist.user.Artist.photoRealism
                  ? 'flex'
                  : 'none'
              }}
            >
              Photo Realism
            </div>
            <div
              className="style"
              style={{
                display: userState.selectedArtist.user.Artist.japanese
                  ? 'flex'
                  : 'none'
              }}
            >
              Japanese
            </div>
            <div
              className="style"
              style={{
                display: userState.selectedArtist.user.Artist.portrait
                  ? 'flex'
                  : 'none'
              }}
            >
              Portrait
            </div>
            <div
              className="style"
              style={{
                display: userState.selectedArtist.user.Artist.lettering
                  ? 'flex'
                  : 'none'
              }}
            >
              Lettering
            </div>
          </div>
          <div>Bio:</div>
          <div style={{ textAlign: 'left' }}>
            {userState.selectedArtist.user.Artist.bio}
          </div>
        </div>
      </div>
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
          <select onChange={(e) => props.handleType(e.target.value)}>
            <option value={'americanTraditional'}>American Traditional</option>
            <option value={'neoTraditional'}>Neo Traditional</option>
            <option value={'tribal'}>Tribal</option>
            <option value={'japanese'}> Japanese</option>
            <option value={'photoRealism'}>Photo Realism</option>
            <option value={'portrait'}>Portrait</option>
            <option value={'geometric'}>Geometric</option>
            <option value={'waterColor'}>Water Color</option>
            <option value={'biomechanical'}>Biomechanical</option>
            <option value={'lettering'}>Lettering</option>
            <option value={'other'}>Other</option>
          </select>
          <button>Submit</button>
        </form>
      </div>

      {/* ######### POST MAP ###### */}

      {postState.posts.map((post, index) => (
        <PostCardArtistPage
          key={index}
          index={index}
          text={post.text}
          image={post.image}
          style={post.style}
          id={post.id}
          postID={post.artist_id}
          profilePic={userState.selectedArtist.user.Artist.image}
          remove={props.deletePost}
        />
      ))}

      {/* ####### REVIEW FORM ######### */}
      <div
        className="review-div"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '60px',
          marginBottom: '40px'
        }}
      >
        <div
          style={{
            display:
              userState.selectedArtist.user.id !== userState.userData.id
                ? 'flex'
                : 'none',
            marginTop: '30px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}
          >
            <div style={{ marginBottom: '10px' }}>Leave a review!</div>
            <form onSubmit={handleReviewSubmit}>
              <textarea
                value={reviewState.text}
                className="input"
                onChange={(e) => props.handleReviewText(e.target.value)}
                style={{
                  width: '500px',
                  height: '80px',
                  backgroundColor: '#292929'
                }}
              />
            </form>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <span
                  style={{
                    color: reviewState.reviewRating >= 1 ? '#FF3131' : 'white',
                    cursor: 'pointer',
                    fontSize: '40px',
                    fontFamily: 'cursive'
                  }}
                  onClick={(e) => props.handleRating(1)}
                >
                  &#10039;
                </span>
                <span
                  style={{
                    color: reviewState.reviewRating >= 2 ? '#FF3131' : 'white',
                    cursor: 'pointer',
                    fontSize: '40px'
                  }}
                  onClick={(e) => props.handleRating(2)}
                >
                  &#10039;
                </span>
                <span
                  style={{
                    color: reviewState.reviewRating >= 3 ? '#FF3131' : 'white',
                    cursor: 'pointer',
                    fontSize: '40px',
                    fontFamily: 'cursive'
                  }}
                  onClick={(e) => props.handleRating(3)}
                >
                  &#10039;
                </span>
                <span
                  style={{
                    color: reviewState.reviewRating >= 4 ? '#FF3131' : 'white',
                    cursor: 'pointer',
                    fontSize: '40px',
                    fontFamily: 'cursive'
                  }}
                  onClick={(e) => props.handleRating(4)}
                >
                  &#10039;
                </span>
                <span
                  style={{
                    color: reviewState.reviewRating >= 5 ? '#FF3131' : 'white',
                    cursor: 'pointer',
                    fontSize: '40px',
                    fontFamily: 'cursive'
                  }}
                  onClick={(e) => props.handleRating(5)}
                >
                  &#10039;
                </span>
              </div>
              <div
                class="filter-button"
                style={{ height: '20px' }}
                onClick={handleReviewSubmit}
              >
                SUBMIT
              </div>
            </div>
          </div>
        </div>

        {/* ##### REVIEW MAP ##### */}
        <div>{reviewState.reviews.length} Reviews</div>
        <div
          style={{
            width: '65vw',
            display: 'flex',
            flexDirection: 'column-reverse',
            textAlign: 'left'
          }}
        >
          {reviewState.reviews.map((review, index) => (
            <ReviewCard
              key={index}
              index={index}
              id={review.id}
              text={review.text}
              rating={review.rating}
              postedBy={review.postedBy}
              userID={userState.userData.id}
              reviewID={review.user_id}
              remove={props.deleteReview}
            />
          ))}
        </div>
      </div>
    </div>
  ) : null
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage)
