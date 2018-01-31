import React, { PureComponent } from 'react'

class EventItem extends PureComponent {
  render() {
    const { title, summary, date, techno, disco, funkHouse } = this.props

    return(
      <article className="event">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <p>{ date }</p>
          <ul>
            { techno && <li><span role="img" aria-label="techno">🌾</span></li> }
            { !techno && disco && <li><span role="img" aria-label="vegatarian">🥕</span></li> }
            { funkHouse && <li><span role="img" aria-label="funkHouse">🐟</span></li> }
          </ul>
        </div>
      </article>
    )
  }
}

export default EventItem
