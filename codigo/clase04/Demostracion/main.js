document.addEventListener("DOMContentLoaded", function () {
  const box = document.getElementById("myBox");
  const contentInput = document.getElementById("contentInput");
  const paddingInput = document.getElementById("paddingInput");
  const borderWidthInput = document.getElementById("borderWidthInput");
  const borderStyleSelect = document.getElementById("borderStyleSelect");
  const borderColorInput = document.getElementById("borderColorInput");
  const marginInput = document.getElementById("marginInput");
  const contentSizeInput = document.getElementById("contentSizeInput");
  const contentPositionInput = document.getElementById("contentPositionInput");

  contentInput.addEventListener("input", function () {
    box.innerText = this.value;
  });

  contentPositionInput.addEventListener("input", function () {
    box.style.transform = "translateX(" + this.value + "px)";
  });
  contentSizeInput.addEventListener("input", function () {
    box.style.fontSize = this.value + "px";
  });

  paddingInput.addEventListener("input", function () {
    box.style.padding = this.value + "px";
  });

  borderWidthInput.addEventListener("input", function () {
    box.style.borderWidth = this.value + "px";
  });

  borderStyleSelect.addEventListener("change", function () {
    box.style.borderStyle = this.value;
  });

  borderColorInput.addEventListener("input", function () {
    box.style.borderColor = this.value;
  });

  marginInput.addEventListener("input", function () {
    box.style.margin = this.value + "px";
  });
});
