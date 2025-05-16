// gallery.js

document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("galleryGrid");

  // Replace these with your actual image URLs or local paths
  const imageList = [
    "images/classroom1.jpg",
    "images/classroom2.jpg",
    "images/event1.jpg",
    "images/event2.jpg",
    "images/facility1.jpg",
    "images/facility2.jpg",
    "images/group1.jpg",
    "images/group2.jpg"
  ];

  imageList.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Institute photo";
    img.classList.add("gallery-image");
    galleryGrid.appendChild(img);
  });
});
