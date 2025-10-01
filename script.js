const button = document.getElementById("runButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const input = prompt("Enter elements separated by commas (e.g. 2, hello, 3.5, true):");

  if (input === null || input.trim() === "") {
    resultDiv.innerText = "⚠️ You must enter something!";
    resultDiv.style.display = "inline-block";
    return;
  }

  const arr = input.split(",").map(item => item.trim());

  function averageNumbers(array) {
    let sum = 0;
    let count = 0;

    for (let item of array) {
      if (item === "") continue;
      const num = parseFloat(item);
      if (!isNaN(num) && isFinite(num)) {
        sum += num;
        count++;
      }
    }

    if (count === 0) return null;
    return sum / count;
  }

  const avg = averageNumbers(arr);

  if (avg === null) {
    resultDiv.innerText = "⚠️ No numeric items found. Try again!";
  } else {
    resultDiv.innerText = "✅ Average: " + (Math.round(avg * 100) / 100);
  }

  resultDiv.style.display = "inline-block"; // робимо блок видимим після обробки
});
