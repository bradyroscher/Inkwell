import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ArtistPageHeader from '../components/ArtistPageHeader'
import ReviewCard from '../components/ReviewCard'
import PostCardArtistPage from '../components/PostCardArtistPage'
import { SetArtistId, SetSelectedArtist } from '../store/actions/UserActions'
import {
  SetReviews,
  SetReviewText,
  SetAverage,
  SetRating,
  DeleteReview,
  AddReview
} from '../store/actions/ReviewActions'
import {
  SetPostImage,
  SetPostText,
  AddPost,
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
    addReview: (array) => dispatch(AddReview(array)),
    handlePostText: (text) => dispatch(SetPostText(text)),
    handlePostImage: (link) => dispatch(SetPostImage(link)),
    addPost: (obj) => dispatch(AddPost(obj)),
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
    props.addReview({
      rating: reviewState.reviewRating,
      text: reviewState.text,
      postedBy: userState.userData.name,
      user_id: userState.userData.id,
      artist_id: userState.selectedArtist.user.Artist.id
    })
    // props.addReview(res)
  }

  const handlePostSubmit = (e) => {
    e.preventDefault()
    props.addPost({
      image: postState.image,
      text: postState.text,
      style: postState.type,
      postedBy: userState.userData.name,
      artist_id: userState.selectedArtist.user.Artist.id
    })
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
      <div style={{ width: '75vw', display: 'flex', justifyContent: 'center' }}>
        <ArtistPageHeader
          image={userState.selectedArtist.user.Artist.image}
          name={userState.selectedArtist.user.name}
          average={reviewState.average}
          bio={userState.selectedArtist.user.Artist.bio}
          americanTraditional={
            userState.selectedArtist.user.Artist.americanTraditional
          }
          neoTraditional={userState.selectedArtist.user.Artist.neoTraditional}
          geometric={userState.selectedArtist.user.Artist.geometric}
          biomechanical={userState.selectedArtist.user.Artist.biomechanical}
          waterColor={userState.selectedArtist.user.Artist.waterColor}
          tribal={userState.selectedArtist.user.Artist.tribal}
          photoRealism={userState.selectedArtist.user.Artist.photoRealism}
          japanese={userState.selectedArtist.user.Artist.japanese}
          portrait={userState.selectedArtist.user.Artist.portrait}
          lettering={userState.selectedArtist.user.Artist.lettering}
        />
      </div>
      {/*  ###### POST FEATURE RENDER ######  */}

      <div
        style={{
          display:
            userState.selectedArtist.user.id === userState.userData.id
              ? 'flex'
              : 'none'
        }}
        className="post-form-div"
      >
        <form
          style={{ display: 'flex', flexDirection: 'column', width: '55vw' }}
          onSubmit={handlePostSubmit}
        >
          <div>Submit a Post</div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                margin: '15px'
              }}
            >
              <div>Image Link</div>
              <input
                className="input"
                style={{ backgroundColor: '#292929' }}
                value={postState.image}
                onChange={(e) => props.handlePostImage(e.target.value)}
              />
              <div style={{ marginTop: '10px' }}>Select Tattoo</div>
              <select onChange={(e) => props.handleType(e.target.value)}>
                <option value={'americanTraditional'}>
                  American Traditional
                </option>
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
            </div>
            <div
              style={{
                width: '50%',
                margin: '15px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div>About</div>
              <textarea
                style={{ height: '70%', backgroundColor: '#292929' }}
                className="input"
                value={postState.text}
                onChange={(e) => props.handlePostText(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '15px'
              }}
            >
              <div className="filter-button" onClick={handlePostSubmit}>
                Submit
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* ######### POST MAP ###### */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column-reverse'
        }}
      >
        {postState.posts.map((post, index) => (
          <PostCardArtistPage
            key={index}
            index={index}
            text={post.text}
            image={post.image}
            style={post.style}
            id={post.id}
            postID={post.artist_id}
            userID={userState.userData.id}
            profilePic={userState.selectedArtist.user.Artist.image}
            remove={props.deletePost}
          />
        ))}
      </div>

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
                className="filter-button"
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
            width: '70vw',
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
