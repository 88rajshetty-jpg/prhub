let count = 0;

function updateUI() {
  // Button elements
  const plus = document.getElementById("increaseBtn");
  const minus = document.getElementById("decrease");

  // Disable logic
  plus.disabled = count >= 10;
  minus.disabled = count <= 0;

  // Reset buttons logic
  document.getElementById("resetplusbtn").style.display =
    plus.disabled && !minus.disabled ? "inline-block" : "none";

  document.getElementById("resetminusbtn").style.display =
    minus.disabled && !plus.disabled ? "inline-block" : "none";

  document.getElementById("resetBothbtn").style.display =
    plus.disabled && minus.disabled ? "inline-block" : "none";

     // Count display
  document.getElementById("count").innerText = count;
}

// Counter functions
function increase() {
  count++;
  updateUI();
}

function decrease() {
  count--;
  updateUI();
}

// Reset functions
function resetplus() {
  count = 9;
  updateUI();
}

function resetminus() {
  count = 1;
  updateUI();
}

function resetBoth() {
  count = 0;
  updateUI();
}

// Initial call
updateUI();