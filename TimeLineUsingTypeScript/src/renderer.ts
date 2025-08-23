import { EventData } from "./types.js";
import { showModal } from "./modal.js";

export function renderTimeline(events: EventData[]): void {
  const timeline = document.getElementById("timeline") as HTMLElement;
  timeline.innerHTML = "";

  events.forEach((event, index) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <div class="timeline-event">
        <div class="timeline-year">${event.year}</div>
        <div class="timeline-card">
          <h3>${event.title}</h3>
          <figure><img src="${event.imageURL}" alt="${event.title}"></figure>
          <p>${event.description}</p>
          <a href="#">Learn More</a>
          ${index < events.length - 1 ? "<hr />" : ""}
        </div>
      </div>
    `;
    timeline.appendChild(article);

    const learnMore = article.querySelector("a") as HTMLAnchorElement;
    learnMore.addEventListener("click", (e: Event) => {
      e.preventDefault();
      showModal(event);
    });
  });
}
