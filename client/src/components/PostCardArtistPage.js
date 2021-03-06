import { React, useEffect, useState } from 'react'
import { EditPost, DeletePost } from '../services/PostServices'

const PostCardArtistPage = (props) => {
  const [editing, setEditing] = useState(false)
  const [image, setImage] = useState(props.image)
  const [style, setStyle] = useState('')
  const [text, setText] = useState(props.text)

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

  const handleSubmit = () => {
    setEditing(false)
    EditPost(
      {
        text: text,
        image: image,
        style: style
      },
      parseInt(props.id)
    )
  }

  const handleDelete = () => {
    setEditing(false)
    DeletePost(parseInt(props.id))
    props.remove(props.index)
  }

  return !editing ? (
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
            src={image}
          />
        </div>

        <div
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
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
                alignItems: 'center',
                marginTop: '-20px'
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
                  padding: '15px'
                }}
              >
                {style}
              </div>
            </div>

            <div style={{ textAlign: 'left', marginTop: '20px' }}>{text}</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <span
              onClick={() => setEditing(true)}
              style={{
                display: props.userID === props.postID ? 'flex' : 'none',
                fontSize: '40px',
                cursor: 'pointer',
                marginBottom: '-20px',
                marginRight: '-15px'
              }}
              className="edit-icon"
            >
              &#9998;
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    // ##### EDITING ######

    <div>
      <div
        className="post-card-div"
        style={{ width: '65vw', marginTop: '50px' }}
      >
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
              src={image}
            />
          </div>

          <div
            style={{
              width: '30%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
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
                  width: '100%'
                }}
              >
                <img
                  src={props.profilePic}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '60px'
                  }}
                />
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                >
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

              <textarea
                className="input"
                style={{ height: '70%', width: '80%', marginTop: '20px' }}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div style={{ marginTop: '15px', marginBottom: '-10px' }}>
                Image Link
              </div>
              <input
                className="input"
                style={{ width: '80%', marginTop: '20px' }}
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div
                className="filter-button"
                style={{
                  height: '15px',
                  textAlign: 'center',
                  fontSize: '12px',
                  marginBottom: '-15px',
                  marginRight: '-15px'
                }}
                onClick={handleSubmit}
              >
                SUBMIT
              </div>
              <div
                className="filter-button"
                style={{
                  height: '15px',
                  textAlign: 'center',
                  fontSize: '12px',
                  marginLeft: '25px',
                  marginBottom: '-15px',
                  marginRight: '-15px'
                }}
                onClick={handleDelete}
              >
                DELETE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCardArtistPage
