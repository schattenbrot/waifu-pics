const contentDiv = document.getElementById("content");
const imageContainer = document.querySelector("#image");

const fetchNewImage = async () => {
  const response = await fetch("https://api.waifu.pics/sfw/neko");
  const data = await response.json();
  const imageUrl = data.url;
  imageContainer.style.backgroundImage = `url('${imageUrl}')`;
};

fetchNewImage();

const newImageButton = document.getElementById("new-image-button");
newImageButton.addEventListener("click", () => {
  fetchNewImage();
});
