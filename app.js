const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const resultEl = document.getElementById("result");

const addBtn = document.getElementById("addBtn");
const mulBtn = document.getElementById("mulBtn");
const clearBtn = document.getElementById("clearBtn");

const msgEl = document.getElementById("msg");

function setMsg(text, type = "") {
  msgEl.textContent = text;
  msgEl.className = "msg" + (type ? ` ${type}` : "");
}

function readNumbers() {
  const a = Number(num1El.value);
  const b = Number(num2El.value);

  // If either field is empty, Number("") becomes 0, so we explicitly check empties:
  if (num1El.value.trim() === "" || num2El.value.trim() === "") {
    throw new Error("Please enter both numbers.");
  }
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error("Please enter valid numbers.");
  }
  return { a, b };
}

function setResult(value) {
  resultEl.value = String(value);
}

addBtn.addEventListener("click", () => {
  try {
    const { a, b } = readNumbers();
    const sum = a + b;
    setResult(sum);
    setMsg(`Added: ${a} + ${b} = ${sum}`, "ok");
  } catch (e) {
    setResult("");
    setMsg(e.message, "error");
  }
});

mulBtn.addEventListener("click", () => {
  try {
    const { a, b } = readNumbers();
    const product = a * b;
    setResult(product);
    setMsg(`Multiplied: ${a} × ${b} = ${product}`, "ok");
  } catch (e) {
    setResult("");
    setMsg(e.message, "error");
  }
});

clearBtn.addEventListener("click", () => {
  num1El.value = "";
  num2El.value = "";
  setResult("");
  setMsg("");
  num1El.focus();
});

// Optional: press Enter to add
[num1El, num2El].forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addBtn.click();
  });
});
