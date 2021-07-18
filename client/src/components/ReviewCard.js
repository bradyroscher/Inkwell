import React from 'react'

const ReviewCard = (props) => {
  return (
    <div>
      <div>
        {props.text}, {props.rating}
        <span>&#9733;</span>
      </div>
    </div>
  )
}

export default ReviewCard
