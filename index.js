const DOMSelectors = {
  form: document.querySelector(".form"),
  boxTitleInput: document.querySelector("#boxTitle"),
  boxCaptionInput: document.querySelector("#boxCaption"),
  boxColorInput: document.querySelector("#color"),
  imageInput: document.querySelector("#image"),
  submitButton: document.querySelector(".submit"),
  box: document.querySelector(".forms"),
};

function createBox(title, caption, bgColor, imageUrl) {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
  <div class="box" style="background-color: ${bgColor};">
    <h2>${title}</h2>
    ${imageUrl ? `<img src="${imageUrl}" alt="Uploaded Image" />` : ""}
    <p>${caption}</p>
  </div>
  `
  );
}

function submitValues(event) {
  event.preventDefault();
  const title = DOMSelectors.boxTitleInput.value;
  const caption = DOMSelectors.boxCaptionInput.value;
  const bgColor = DOMSelectors.boxColorInput.value;
  const imageFile = DOMSelectors.imageInput.files[0];
  const imageUrl = imageFile ? URL.createObjectURL(imageFile) : "";

  createBox(title, caption, bgColor, imageUrl);
  DOMSelectors.form.reset();
}

DOMSelectors.submitButton.addEventListener("click", submitValues);
