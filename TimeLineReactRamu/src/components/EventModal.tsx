import React from "react";
import ReactDOM from "react-dom";
import type { EventData } from "../types";

interface EventModalProps {
  event: EventData | null;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  return ReactDOM.createPortal(
    <div id="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>
          {event.title} ({event.year})
        </h2>
        <figure>
          <img src={event.imageURL} alt={event.title} />
        </figure>
        <p>{event.description}</p>
        <p>
          <strong>Category:</strong> {event.category}
        </p>
      </div>
    </div>,
    document.body
  );
};

export default EventModal;
