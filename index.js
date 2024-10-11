const DOMSelectors = {
  form: document.querySelector("form"),
  backgroundColor: document.querySelector("#color"),
  imageLink: document.querySelector("#image"),
  boxTitle: document.querySelector("#boxTitle"),
  boxCaption: document.querySelector("#boxCaption"),
};

function createBox() {
  let bgclor = document.querySelector("color");
  console.log *= bgclor;

  bgcolor.addEventListener("input", function (event) {
    event.preventDefault();
    console.log(event, target);
    background.style.backgroundColor = document.querySelector("color");
  });
}
