import React from 'react'

const PostCard = (props) => {
  return (
    <div>
      <img src={props.image} />
      {props.text}
    </div>
  )
}

export default PostCard
