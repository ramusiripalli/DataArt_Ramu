import React, { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { EventData } from "../types";
import EventMarker from "./EventMarker";

interface TimelineProps {
  events: EventData[];
  /** Called when a marker’s “Learn More” is activated.
   *  Receives the event and the triggering button element for focus restore.
   */
  onLearnMore: (event: EventData, triggerEl: HTMLButtonElement) => void;
}

const Timeline: React.FC<TimelineProps> = ({ events, onLearnMore }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    // Focus first marker when timeline mounts (optional)
    focusMarker(activeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events.length]);

  const focusMarker = (idx: number) => {
    const btn = listRef.current?.querySelector<HTMLButtonElement>(
      `button[data-marker-index="${idx}"]`
    );
    btn?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (
      !["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End"].includes(
        e.key
      )
    ) {
      return;
    }

    e.preventDefault();

    let next = activeIndex;
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = Math.min(events.length - 1, activeIndex + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = Math.max(0, activeIndex - 1);
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = events.length - 1;
        break;
    }

    setActiveIndex(next);
    focusMarker(next);
  };

  return (
    <div id="TimelineStyle">
      {/* Optional secondary section kept for layout parity; remove if unused */}
      <section aria-hidden="true" />

      <section aria-label="Historical events timeline">
        <ol
          id="timeline"
          role="list"
          aria-orientation="vertical"
          ref={listRef}
          onKeyDown={onKeyDown}
        >
          {events.map((event, index) => (
            <EventMarker
              key={`${event.year}-${event.title}-${index}`}
              event={event}
              isLast={index === events.length - 1}
              index={index}
              isActive={index === activeIndex}
              onLearnMore={(ev, triggerEl) => {
                setActiveIndex(index);
                onLearnMore(ev, triggerEl);
              }}
            />
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Timeline;
