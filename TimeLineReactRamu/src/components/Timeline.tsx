import React from "react";
import type { EventData } from "../types";
import EventMarker from "./EventMarker";

interface TimelineProps {
  events: EventData[];
  onLearnMore: (event: EventData) => void;
}

const Timeline: React.FC<TimelineProps> = ({ events, onLearnMore }) => {
  return (
    <div id="TimelineStyle">
    <section >
    </section>
  
     <section id="timeline">
      {events.map((event, index) => (
        <EventMarker
          key={event.title}
          event={event}
          isLast={index === events.length - 1}
          onLearnMore={onLearnMore}
        />
      ))}
    </section>
    </div>
  );
};

export default Timeline;
