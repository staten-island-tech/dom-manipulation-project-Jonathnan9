const DOMSelectors = {
  form: document.querySelector(".form"),
  boxTitleInput: document.querySelector("#boxTitle"),
  boxCaptionInput: document.querySelector("#boxCaption"),
  boxColorInput: document.querySelector("#bgcolor"),
  boxTextColorInput: document.querySelector("#txtcolor"),
  imageInput: document.querySelector("#image"),
  submitButton: document.querySelector(".submit"),
  box: document.querySelector(".forms"),
};

function createBox(title, caption, bgColor, txtColor, imageUrl) {
  const boxesContainer = document.querySelector(".boxes");
  const boxId = `box-${Date.now()}`;

  boxesContainer.insertAdjacentHTML(
    "beforeend",
    `
  <div class="box" id="${boxId}" style="background-color: ${bgColor};">
    <h2 style="color: ${txtColor};">${title}</h2>
    ${imageUrl ? `<img src="${imageUrl}" alt="Uploaded Image" />` : ""}
    <p style="color: ${txtColor};">${caption}</p>
    <button class="delete-btn" onclick="deleteBox('${boxId}')">Delete</button>
  </div>
  `
  );
}

function submitValues(event) {
  event.preventDefault();

  if (!DOMSelectors.form.checkValidity()) {
    DOMSelectors.form.reportValidity();
    return;
  }

  // const maxTitleLength = 50;
  // const maxCaptionLength = 100;
  const title = DOMSelectors.boxTitleInput.value;
  const caption = DOMSelectors.boxCaptionInput.value;
  const bgColor = DOMSelectors.boxColorInput.value;
  const txtColor = DOMSelectors.boxTextColorInput.value;
  const imageFile = DOMSelectors.imageInput.files[0];
  const imageUrl = imageFile ? URL.createObjectURL(imageFile) : "";

  // if (title.length > maxTitleLength) {
  //   alert(`Title is above ${maxTitleLength} character limit.`);
  //   return;
  // }

  // if (caption.length > maxCaptionLength) {
  //   alert(`Caption is above ${maxCaptionLength} character limit.`);
  //   return;
  // }

  createBox(title, caption, bgColor, txtColor, imageUrl);
  DOMSelectors.form.reset();
}

DOMSelectors.submitButton.addEventListener("click", submitValues);

function deleteBox(boxId) {
  const box = document.getElementById(boxId);
  if (box) {
    box.remove();
  }
}
