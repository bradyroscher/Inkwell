import React from 'react'

const ArtistPageHeader = (props) => {
  return (
    <div
      className="artist-page-header"
      style={{ display: 'flex', width: '100%', marginTop: '75px' }}
    >
      <div style={{ width: '55%' }}>
        <div
          style={{
            fontSize: '60px',
            borderBottom: '1px solid #7b7f6f',
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
            marginBottom: '15px'
          }}
        >
          {props.name}
        </div>
        <div>Average Rating: {props.average}</div>
        <div className="style-grid">
          <div
            className="style"
            style={{
              display: props.americanTraditional ? 'flex' : 'none'
            }}
          >
            American Traditional
          </div>
          <div
            className="style"
            style={{
              display: props.neoTraditional ? 'flex' : 'none'
            }}
          >
            Neo Traditional
          </div>
          <div
            className="style"
            style={{
              display: props.geometric ? 'flex' : 'none'
            }}
          >
            Geometric
          </div>
          <div
            className="style"
            style={{
              display: props.biomechanical ? 'flex' : 'none'
            }}
          >
            Biomechanical
          </div>
          <div
            className="style"
            style={{
              display: props.waterColor ? 'flex' : 'none'
            }}
          >
            Water Color
          </div>
          <div
            className="style"
            style={{
              display: props.tribal ? 'flex' : 'none'
            }}
          >
            Tribal
          </div>
          <div
            className="style"
            style={{
              display: props.photoRealism ? 'flex' : 'none'
            }}
          >
            Photo Realism
          </div>
          <div
            className="style"
            style={{
              display: props.japanese ? 'flex' : 'none'
            }}
          >
            Japanese
          </div>
          <div
            className="style"
            style={{
              display: props.portrait ? 'flex' : 'none'
            }}
          >
            Portrait
          </div>
          <div
            className="style"
            style={{
              display: props.lettering ? 'flex' : 'none'
            }}
          >
            Lettering
          </div>
        </div>
        <div>Bio:</div>
        <div style={{ textAlign: 'left' }}>{props.bio}</div>
      </div>

      <img
        style={{
          width: '45%',
          borderBottomRightRadius: '15px',
          borderTopRightRadius: '15px'
        }}
        src={props.image}
      />
    </div>
  )
}

export default ArtistPageHeader
