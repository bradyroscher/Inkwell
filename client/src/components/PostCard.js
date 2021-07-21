import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const PostCard = (props) => {
  const [style, setStyle] = useState('')

  const parseStyle = (style) => {
    switch (style) {
      case 'americanTraditional':
        return 'American Tradition'
      case 'neoTraditional':
        return 'Neo Traditional'
      case 'tribal':
        return 'Tribal'
      case 'japanese':
        return 'Japanese'
      case 'photoRealism':
        return 'Photorealism'
      case 'portrait':
        return 'Portrait'
      case 'geometric':
        return 'Geometric'
      case 'waterColor':
        return 'Water Color'
      case 'biomechanical':
        return 'Biomechanical'
      case 'lettering':
        return 'Lettering'
      case 'other':
        return 'Other'
    }
  }

  useEffect(() => setStyle(parseStyle(props.style)), [])

  const history = useHistory()
  return (
    <div className="post-card-div" style={{ width: '65vw', marginTop: '50px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div style={{ width: '70%' }}>
          <img
            style={{
              width: '100%',
              borderBottomLeftRadius: '15px',
              borderTopLeftRadius: '15px'
            }}
            src={props.image}
          />
        </div>

        <div
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            margin: '30px'
          }}
        >
          <div>
            <div
              className="post-card-header"
              style={{
                display: 'flex',
                borderRight: '1px solid #7b7f6f',
                borderBottom: '1px solid #7b7f6f',
                width: '100%',
                marginTop: '-20px',
                alignItems: 'center'
              }}
            >
              <img
                src={props.profilePic}
                style={{ width: '60px', height: '60px', borderRadius: '60px' }}
              />
              <div
                className="style"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px'
                }}
              >
                {style}
              </div>
            </div>
            <div
              className="filter-button"
              style={{
                textAlign: 'center',
                marginTop: '15px',
                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'left'
              }}
              onClick={() => history.push(`/artist/${props.postID}`)}
            >
              Posted By: {props.postedBy}
            </div>
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
              {props.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
