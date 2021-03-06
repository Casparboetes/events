import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Techno from '../images/disco-ball-techno.svg'
import Disco from '../images/disco-ball-disco.svg'
import Funkhouse from '../images/funk-house.svg'
import LikeButton from '../components/LikeButton'
import './EventItem.css'

class EventItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    techno: PropTypes.bool,
    disco: PropTypes.bool,
    funkHouse: PropTypes.bool,
  }



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
            </div>
          </main>
          <footer>
            <LikeButton />
            <ul className="img">
              { techno && <img style={{ height : '4em', }} img src={ Techno } alt="techno"/> }
              { disco && <img style={{ height : '4em'}}img src={ Disco } alt="disco"/> }
              { funkHouse && <img style={{ height : '4em'}}img src={ Funkhouse } alt="funkhouse"/> }
            </ul>
        </footer>
      </article>
    )
  }
}

export default EventItem
