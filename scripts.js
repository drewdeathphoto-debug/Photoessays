// Example data structure for essays
const essays = [
    {
        title: "Pipe Band",
        folder: "pipe-band",
        cover: "cover.jpg",
        link: "essays/pipe-band.html"
    },
    {
        title: "Smoke Breaks",
        folder: "smoke-breaks",
        cover: "cover.jpg",
        link: "essays/smoke-breaks.html"
    },
    {
        title: "The Berrypicker",
        folder: "the-berrypicker",
        cover: "cover.jpg",
        link: "essays/the-berrypicker.html"
    },
	    {
        title: "The Berrypicker",
        folder: "folder",
        cover: "cover.jpg",
        link: "essays/essay-template.html"
    }
];

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
  { src: "images/pipe-band/cover.jpg", title: "Pipe Band", link: "essays/pipe-band.html" },
  { src: "images/smoke-breaks/cover.jpg", title: "Smoke Breaks", link: "essays/smoke-breaks.html" },
  { src: "images/the-berrypicker/cover.jpg", title: "The Berrypicker", link: "essays/the-berrypicker.html" },
  { src: "images/the-berrypicker/cover.jpg", title: "The Berrypicker", link: "essays/the-berrypicker.html" }
 
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