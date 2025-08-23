import { fetchEvents } from "./fetcher.js";
import { renderTimeline } from "./renderer.js";

document.addEventListener("DOMContentLoaded", async () => {
  const events = await fetchEvents();
  renderTimeline(events);
});
