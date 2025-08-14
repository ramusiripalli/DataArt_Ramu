document.addEventListener('DOMContentLoaded', () => {
  fetch('data/events.json')
    .then(response => response.json())
    .then(events => {
      const timeline = document.getElementById('timeline');
      timeline.innerHTML = ''; 

      events.forEach((event, index) => {
        const article = document.createElement('article');
        article.innerHTML = `
          <div class="timeline-event">
            <div class="timeline-year">${event.year}</div>
            <div class="timeline-card">
              <h3>${event.title}</h3>
              <figure><img src="${event.imageURL}" alt="${event.title}"></figure>
              <p>${event.description}</p>
              <a href="#">Learn More</a>
              ${index < events.length - 1 ? '<hr />' : ''}
            </div>
          </div>
        `;
        timeline.appendChild(article);

        // Attach click handler for modal
        const learnMore = article.querySelector('a');
        learnMore.addEventListener('click', (e) => {
          e.preventDefault();
          showModal(event);
        });
      });
    })
    .catch(error => console.error('Error fetching events:', error));
});

function showModal(event) {
  const modal = document.getElementById('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>${event.title} (${event.year})</h2>
      <figure><img src="${event.imageURL}" alt="${event.title}"></figure>
      <p>${event.description}</p>
      <p><strong>Category:</strong> ${event.category}</p>
    </div>
  `;
  modal.style.display = 'flex';

  const closeBtn = modal.querySelector('.close');
  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  modal.innerHTML = ''; // Clear content for next use
}