import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
import './LikeButton.css'

class LikeButton extends PureComponent {
  constructor() {
    super()

    this.state = {
      liked: false
    }
  }

  classNames() {
    const { liked } = this.state
    let classes = 'like'

    if (liked) { classes += ' liked'}

    return classes
  }

  toggleLike() {
    this.setState({
      liked: !this.state.liked
    })
    console.log('Like button clicked!')
    // alert('Wise choice my young Padawan')
  }

  render() {
    const { liked } = this.props

    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          <img alt="like" className="heart" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img alt="like" className="heart" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}
//
// <button onClick={ this.toggleLike.bind(this) }>
//   { liked ? '🍻📢' : '🍻' }
// </button>
// <span className="likes">{ liked ? 'Definitly Going' : null }</span>

export default LikeButton
