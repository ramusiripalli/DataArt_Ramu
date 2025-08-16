import { EventData } from "./types.js";

export function showModal(event: EventData): void {
  const modal = document.getElementById("modal") as HTMLElement;
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>${event.title} (${event.year})</h2>
      <figure><img src="${event.imageURL}" alt="${event.title}"></figure>
      <p>${event.description}</p>
      <p><strong>Category:</strong> ${event.category}</p>
    </div>
  `;
  modal.style.display = "flex";

  const closeBtn = modal.querySelector(".close") as HTMLElement;
  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e: Event) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

export function closeModal(): void {
  const modal = document.getElementById("modal") as HTMLElement;
  modal.style.display = "none";
  modal.innerHTML = "";
}
