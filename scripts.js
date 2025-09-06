// Function to load tiles into a grid
function loadGrid(gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    essays.forEach(essay => {
        const tile = document.createElement("a");
        tile.href = essay.link;
        tile.className = "photo-tile";
        tile.style.backgroundImage = `url('images/${essay.folder}/${essay.cover}')`;

        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.textContent = essay.title;

        tile.appendChild(overlay);
        grid.appendChild(tile);
    });
}


const images = [
  { src: "images/bagpipes/cover.jpg", title: "&#128274 Bagpipes", link: "" },
  { src: "images/smoke-breaks/cover.jpg", title: "&#128274 Smoke Breaks", link: "" },
  { src: "images/the-berrypicker/cover.jpg", title: "&#128274 The Berrypicker", link: "" },
  { src: "images/Untitled 01/cover.jpg", title: "&#128274 Untitled 01", link: "" },
  { src: "images/Untitled 02/cover.jpg", title: "&#128274 Untitled 02", link: "" },
  { src: "images/Untitled 03/cover.jpg", title: "&#128274 Untitled 03", link: "" },
  { src: "images/Untitled 04/cover.jpg", title: "&#128274 Untitled 04", link: "" },
  { src: "images/Untitled 05/cover.jpg", title: "&#128274 Untitled 05", link: "" },
  { src: "images/Untitled 06/cover.jpg", title: "&#128274 Untitled 06", link: "" },
  { src: "images/Untitled 07/cover.jpg", title: "&#128274 Untitled 07", link: "" },
  { src: "images/Untitled 08/cover.jpg", title: "&#128274 Untitled 08", link: "" },
  { src: "images/Untitled 09/cover.jpg", title: "&#128274 Untitled 09", link: "" },
  { src: "images/Untitled 10/cover.jpg", title: "&#128274 Untitled 10", link: "" },
  { src: "images/Untitled 11/cover.jpg", title: "&#128274 Untitled 11", link: "" },
  { src: "images/Untitled 12/cover.jpg", title: "&#128274 Untitled 12", link: "" }
 
  // Add more images here
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("photoGrid");

    images.forEach(img => {
        const tile = document.createElement("a");
        tile.href = img.link;
        tile.className = "photo-tile";
        tile.innerHTML = `
            <img src="${img.src}" alt="${img.title}">
            <div class="title-overlay">${img.title}</div>
        `;
        grid.appendChild(tile);
    });
});


document.addEventListener("DOMContentLoaded", () => {
	// Check if lightbox exists on this page
	const lightbox = document.getElementById('lightbox');
	const lightboxImg = document.querySelector('.lightbox-img');
	const lightboxClose = document.querySelector('.lightbox-close');

	if (lightbox && lightboxImg && lightboxClose) {
		// When any essay image is clicked, show it in lightbox
		document.querySelectorAll('.essay-content img').forEach(img => {
		img.style.cursor = 'pointer'; // show pointer on hover
		img.addEventListener('click', () => {
		// Optionally, you could use img.dataset.fullSrc for higher-res images
		lightboxImg.src = img.src;
		lightbox.style.display = 'flex';
		});
		});

		// Close lightbox on clicking close button
		lightboxClose.addEventListener('click', () => {
		lightbox.style.display = 'none';
		lightboxImg.src = '';
		});

		// Close lightbox on clicking outside the image
		lightbox.addEventListener('click', e => {
		if (e.target === lightbox) {
		lightbox.style.display = 'none';
		lightboxImg.src = '';
		}
		});
		// Close lightbox when clicking the image itself
		lightboxImg.addEventListener('click', () => {
		lightbox.style.display = 'none';
		lightboxImg.src = '';
		});
		// Close lightbox on ESC key
		document.addEventListener('keydown', e => {
		if (e.key === 'Escape' || e.key === 'Esc') {
		if (lightbox.style.display === 'flex') {
		lightbox.style.display = 'none';
		lightboxImg.src = '';
		}}});
	}
});

// hamburger menubar
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});