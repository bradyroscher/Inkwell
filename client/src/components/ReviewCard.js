import React, { useState } from 'react'
import { UpdateReview, DeleteReview } from '../services/ReviewServices'

const ReviewCard = (props) => {
  const [text, setText] = useState(props.text)
  const [editing, setEditing] = useState(false)
  const [rating, setRating] = useState(props.rating)
  const [count, setCount] = useState(0)

  const handleSubmit = () => {
    setEditing(false)
    UpdateReview(
      {
        rating: rating,
        text: text
      },
      props.id
    )
  }

  const handleDelete = () => {
    setEditing(false)
    DeleteReview(props.id)
    props.remove(props.index)
  }

  if (editing === false) {
    return (
      <div
        style={{
          borderRight: '1px solid #7b7f6f',
          borderBottom: '1px solid #7b7f6f',
          marginBottom: '20px',
          borderBottomRightRadius: '15px',
          padding: '10px',
          marginRight: '35px',
          marginLeft: '35px'
        }}
      >
        <div
          style={{
            fontSize: '20px'
          }}
        >
          {props.postedBy}
          <span
            style={{ color: '#FF3131', fontSize: '20px', paddingLeft: '5px' }}
          >
            &#10039;
          </span>
          <span
            style={{
              color: '#FF3131',
              fontSize: '20px',
              display: rating >= 2 ? 'inline' : 'none'
            }}
          >
            &#10039;
          </span>
          <span
            style={{
              color: '#FF3131',
              fontSize: '20px',
              display: rating >= 3 ? 'inline' : 'none'
            }}
          >
            &#10039;
          </span>
          <span
            style={{
              color: '#FF3131',
              fontSize: '20px',
              display: rating >= 4 ? 'inline' : 'none'
            }}
          >
            &#10039;
          </span>
          <span
            style={{
              color: '#FF3131',
              fontSize: '20px',
              display: rating >= 5 ? 'inline' : 'none'
            }}
          >
            &#10039;
          </span>
        </div>
        <div>{text}</div>
        <span
          onClick={() => setEditing(true)}
          style={{
            display: props.userID === props.reviewID ? 'inline-block' : 'none',
            fontSize: '30px',
            cursor: 'pointer'
          }}
          class="edit-icon"
        >
          &#9998;
        </span>
      </div>
    )
  } else {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}
        >
          <form onSubmit={handleSubmit}>
            <textarea
              value={text}
              className="input"
              onChange={(e) => setText(e.target.value)}
              style={{
                width: '325px',
                height: '65px'
              }}
            />
          </form>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <span
                style={{
                  color: rating >= 1 ? '#FF3131' : 'white',
                  cursor: 'pointer',
                  fontSize: '30px',
                  fontFamily: 'cursive'
                }}
                onClick={() => setRating(1)}
              >
                &#10039;
              </span>
              <span
                style={{
                  color: rating >= 2 ? '#FF3131' : 'white',
                  cursor: 'pointer',
                  fontSize: '30px'
                }}
                onClick={(e) => setRating(2)}
              >
                &#10039;
              </span>
              <span
                style={{
                  color: rating >= 3 ? '#FF3131' : 'white',
                  cursor: 'pointer',
                  fontSize: '30px',
                  fontFamily: 'cursive'
                }}
                onClick={(e) => setRating(3)}
              >
                &#10039;
              </span>
              <span
                style={{
                  color: rating >= 4 ? '#FF3131' : 'white',
                  cursor: 'pointer',
                  fontSize: '30px',
                  fontFamily: 'cursive'
                }}
                onClick={(e) => setRating(4)}
              >
                &#10039;
              </span>
              <span
                style={{
                  color: rating >= 5 ? '#FF3131' : 'white',
                  cursor: 'pointer',
                  fontSize: '30px',
                  fontFamily: 'cursive'
                }}
                onClick={(e) => setRating(5)}
              >
                &#10039;
              </span>
            </div>
            <div
              class="filter-button"
              style={{ height: '15px', textAlign: 'center', fontSize: '12px' }}
              onClick={handleSubmit}
            >
              SUBMIT
            </div>
            <div
              class="filter-button"
              style={{ height: '15px', textAlign: 'center', fontSize: '12px' }}
              onClick={handleDelete}
            >
              DELETE
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewCard
