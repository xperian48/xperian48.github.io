var button = document.getElementById("toggle")
var theme = document.getElementById("theme")

function darktoggle() {
  var element = document.body;
  element.classList.toggle("dark-mode")
  theme.classList.toggle("theme-change")
}
