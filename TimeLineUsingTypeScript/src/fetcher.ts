import { EventData } from "./types.js";

export async function fetchEvents(): Promise<EventData[]> {
  try {
    const response = await fetch("data/events.json");
    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}
