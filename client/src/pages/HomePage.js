import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { SetHomeType } from '../store/actions/UserActions'
import { SetPosts, SetPostsByStyle } from '../store/actions/PostActions'
import PostCard from '../components/PostCard'
import { PostShop } from '../services/ShopServices'

const mapStateToProps = ({ userState, postState }) => {
  return { userState, postState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleType: (value) => dispatch(SetHomeType(value)),
    getPosts: () => dispatch(SetPosts()),
    getPostsByStyle: (style) => dispatch(SetPostsByStyle(style))
  }
}
const HomePage = (props) => {
  const { userState, postState } = props

  const handleClick = () => {
    if (userState.homeStyle === 'All') {
      props.getPosts()
    } else {
      props.getPostsByStyle(userState.homeStyle)
    }
  }

  console.log(userState, userState.homeStyle)
  console.log(postState)

  useEffect(() => {
    props.getPosts()
  }, [])

  return (
    <div>
      <div
        style={{
          marginTop: '10vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <select
          onChange={(e) => props.handleType(e.target.value)}
          value={userState.homeStyle}
          className="select"
        >
          <option value="All">All</option>
          <option value="americanTraditional">American Traditional</option>
          <option value="neoTraditional">Neo Traditional</option>
          <option value="tribal">Tribal</option>
          <option value="japanese"> Japanese</option>
          <option value="photoRealism">Photo Realism</option>
          <option value="portrait">Portrait</option>
          <option value="geometric">Geometric</option>
          <option value="waterColor">Water Color</option>
          <option value="biomechanical">Biomechanical</option>
          <option value="lettering">Lettering</option>
          <option value="other">Other</option>
        </select>
        <div className="filter-button" onClick={handleClick}>
          Filter
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {postState.posts.length
          ? postState.posts.map((post, index) =>
              post.Artist ? (
                <PostCard
                  key={index}
                  index={index}
                  text={post.text}
                  image={post.image}
                  style={post.style}
                  id={post.id}
                  postID={post.artist_id}
                  postedBy={post.postedBy}
                  profilePic={post.Artist.image}
                />
              ) : null
            )
          : null}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
