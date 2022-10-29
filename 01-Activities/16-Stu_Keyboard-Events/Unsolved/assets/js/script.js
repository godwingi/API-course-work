function keydownAction(event) {
  var keyPress = event.key;
  var keyCode = event.code;

  document.querySelector("#key").textContent = keyPress;
  document.querySelector("#code").textContent = keyCode;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);

// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keydownAction);