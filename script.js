/**
 * Update the output text as a user types in the textarea
 */
function updateText() {
  let userText = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = userText;
}

/**
 * Toggle the bold class for the output text
 */
function makeBold(elem) {
  elem.classList.toggle("active");
  document.getElementsByClassName("bg-light")[0].classList.toggle("bold");
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
  elem.classList.toggle("active");
  document.getElementsByClassName("bg-light")[0].classList.toggle("italic");
}

/**
 * Toggle the underline class for the output text
 */
function makeUnderline(elem) {
  elem.classList.toggle("active");
  if (
    document
      .getElementsByClassName("bg-light")[0]
      .classList.contains("underline")
  ) {
    document
      .getElementsByClassName("bg-light")[0]
      .classList.remove("underline");
  } else {
    document.getElementsByClassName("bg-light")[0].classList.add("underline");
  }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 */
function alignText(elem, alignType) {
  elem.classList.toggle("active");
  if (alignType == "left-align") {
    document.getElementById("text-output").style.textAlign = "left";
    if (document.getElementById("center-align").classList.contains("active")) {
      document.getElementById("center-align").classList.remove("active");
    }
    if (document.getElementById("right-align").classList.contains("active")) {
      document.getElementById("right-align").classList.remove("active");
    }
  } else if (alignType == "right-align") {
    document.getElementById("text-output").style.textAlign = "right";
    if (document.getElementById("center-align").classList.contains("active")) {
      document.getElementById("center-align").classList.remove("active");
    }
    if (document.getElementById("left-align").classList.contains("active")) {
      document.getElementById("left-align").classList.remove("active");
    }
  } else if (alignType == "center-align") {
    document.getElementById("text-output").style.textAlign = "center";
    if (document.getElementById("left-align").classList.contains("active")) {
      document.getElementById("left-align").classList.remove("active");
    }
    if (document.getElementById("right-align").classList.contains("active")) {
      document.getElementById("right-align").classList.remove("active");
    }
  }
}
