import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import type { EventData } from "../types";

interface EventModalProps {
  event: EventData | null;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Handle keyboard events (Esc to close, focus trap could be added here too)
  useEffect(() => {
    if (!event) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Focus the close button when modal opens
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  return ReactDOM.createPortal(
    <div
      id="modal"
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
      aria-describedby="event-modal-desc"
      tabIndex={-1}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-content">
        <button
          ref={closeBtnRef}
          type="button"
          className="close"
          aria-label="Close details"
          onClick={onClose}
        >
          ×
        </button>

        <h2 id="event-modal-title">
          {event.title} ({event.year})
        </h2>

        <figure>
          <img src={event.imageURL} alt={event.title} />
        </figure>

        <p id="event-modal-desc">{event.description}</p>

        <p>
          <strong>Category:</strong> {event.category}
        </p>
      </div>
    </div>,
    document.body
  );
};

export default EventModal;
