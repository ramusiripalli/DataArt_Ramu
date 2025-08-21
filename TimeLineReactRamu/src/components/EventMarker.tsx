import React from "react";
import type { EventData } from "../types";

interface EventMarkerProps {
  event: EventData;
  isLast: boolean;
  onLearnMore: (event: EventData) => void;
}

const EventMarker: React.FC<EventMarkerProps> = ({ event, isLast, onLearnMore }) => {
  return (

    <article>
      <div className="timeline-event">
        <div className="timeline-year">{event.year}</div>
        <div className="timeline-card">
          <h3>{event.title}</h3>
          <figure>
            <img src={event.imageURL} alt={event.title} />
          </figure>
          <p>{event.description}</p>
          <a href="#" onClick={(e) => { e.preventDefault(); onLearnMore(event); }}>
            Learn More
          </a>
          {!isLast && <hr />}
        </div>
      </div>
    </article>
  );
};

export default EventMarker;
