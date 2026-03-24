const textInput = document.getElementById("textInput");
const previewText = document.getElementById("previewText");
const colorPicker = document.getElementById("colorPicker");
const fontSize = document.getElementById("fontSize");
const align = document.getElementById("align");


textInput.addEventListener("input", () => {
  previewText.textContent = textInput.value || "Your Text";
});

colorPicker.addEventListener("input", () => {
  previewText.style.color = colorPicker.value;
});


fontSize.addEventListener("input", () => {
  previewText.style.fontSize = fontSize.value + "px";
});

align.addEventListener("change", () => {
  previewText.style.textAlign = align.value;
});

