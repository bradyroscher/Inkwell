import React from 'react'
import { connect } from 'react-redux'
import { SetReviewText } from '../store/actions/ReviewActions'

const mapStateToProps = ({ reviewState }) => {
  return { reviewState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleText: (text) => dispatch(SetReviewText(text))
  }
}
const ReviewForm = () => {
  return (
    <div>
      <form>
        <input />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
