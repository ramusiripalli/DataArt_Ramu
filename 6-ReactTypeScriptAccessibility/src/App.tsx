import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";
import type { EventData } from "./types";
import "./index.css";

const App: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load events");
        return res.json();
      })
      .then((data: EventData[]) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className={`app ${theme}`}>
      <Header onToggleTheme={toggleTheme} />
      {/* Optional future area: <FilterPanel /> */}
      <Timeline events={events} onLearnMore={setSelectedEvent} />
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};

export default App;
