import React, { useRef } from "react";
import type { EventData } from "../types";

interface EventMarkerProps {
  event: EventData;
  isLast: boolean;
  /** Called when user activates “Learn More”.
   *  Passes the event data and the triggering button element (for focus restore).
   */
  onLearnMore: (event: EventData, triggerEl: HTMLButtonElement) => void;
  /** Index of this marker in the timeline (used for ids) */
  index: number;
  /** Whether this marker is currently the active/selected one */
  isActive: boolean;
}

const EventMarker: React.FC<EventMarkerProps> = ({
  event,
  isLast,
  onLearnMore,
  index,
  isActive,
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const titleId = `ev-${index}-title`;

  return (
    <li
      role="listitem"
      className="timeline-event"
      /* Use a valid token for aria-current on the listitem */
      aria-current={isActive ? "date" : undefined}
    >
      {/* Decorative dot; hide from SR, we include year elsewhere in labels */}
      <div className="timeline-year" aria-hidden={true}>
        {event.year}
      </div>

      <article className="timeline-card" aria-labelledby={titleId}>
        <h3 id={titleId} style={{ marginBottom: "0.5rem" }}>
          {event.title}
        </h3>

        <figure>
          <img src={event.imageURL} alt={event.title} />
        </figure>

        <p>{event.description}</p>

        <button
          ref={btnRef}
          type="button"
          className="marker-action"
          data-marker-index={index}
          aria-label={`Learn more about ${event.title}, ${event.year}`}
          onClick={() => {
            if (btnRef.current) onLearnMore(event, btnRef.current);
          }}
        >
          Learn More
        </button>

        {!isLast && <hr aria-hidden={true} />}
      </article>
    </li>
  );
};

export default EventMarker;
