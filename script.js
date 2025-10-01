const button = document.getElementById("runButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const input = prompt("Enter elements separated by commas (e.g. 2, hello, 3.5, true):");
  if (!input || input.trim() === "") {
    resultDiv.innerText = "Please enter at least one item.";
    return;
  }
  const arr = input.split(",").map(item => item.trim());

  function averageNumbers(array) {
    let sum = 0;
    let count = 0;
    for (let item of array) {
      const num = parseInt(item);
      if (!isNaN(num)) {
        sum += num;
        count++;
      }
    }
    if (count === 0) return null;
    return sum / count;
  }

  const avg = averageNumbers(arr);
  resultDiv.innerText = avg === null ? "No numeric items found." : "Average: " + avg;
});
