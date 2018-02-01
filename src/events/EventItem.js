import React, { PureComponent } from 'react'
import './EventItem.css'

class EventItem extends PureComponent {
  render() {
    const { title, summary, date, techno, disco, funkHouse } = this.props

    return(
      <article className="event">
        <header>
        <h1 className="eventTitle">{ title }</h1>
        </header>
        <main>

          <div>
              <p>{ summary }</p>
              <p>{ date }</p>
              <ul>
                { techno && <li><span role="img" aria-label="techno">🌾</span></li> }
                { !techno && disco && <li><span role="img" aria-label="vegatarian">🥕</span></li> }
                { funkHouse && <li><span role="img" aria-label="funkHouse">🐟</span></li> }
              </ul>
            </div>
          </main>
          <footer>
          </footer>
      </article>
    )
  }
}

export default EventItem
