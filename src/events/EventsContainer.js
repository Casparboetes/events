import React, { PureComponent } from 'react'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import EventItem from './EventItem'
import './EventsContainer.css'


class EventsContainer extends PureComponent {
  renderEvent(event, index) {
    return <EventItem key={ index } { ...event } />
  }

  render() {
    return(
      <div className="event wrapper">
        <header className="eventHeader">
        <Title content="Super Secret Events" />
        <SubTitle content="Plan your own Secret" />
        </header>

        <main>
          { this.props.events.map(this.renderEvent) }
        </main>

      </div>
    )
  }
}

export default EventsContainer
