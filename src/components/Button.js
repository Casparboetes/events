import React, { PureComponent } from 'react'
import './Button.css'

class Button extends PureComponent {
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
  }

  render() {
    const { liked } = this.state
    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          { liked ? '🍻📢' : '🍻' }
        </button>
        <span className="likes">{ liked ? 'Definitly Going' : null }</span>
      </p>
    )
  }
}

export default Button
