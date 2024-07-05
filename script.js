let eliminationSteps = [
  [0, 2, 4, 6, 8, 10, 12, 14], // Eliminate half
  [1, 3, 5, 7],                 // Eliminate half again
  [0, 2]                        // Eliminate to get 2 remaining
];

function eliminateCells() {
  if (eliminationSteps.length === 0) {
      alert("Winner: " + document.querySelector('.cell:not(.hidden)').innerText);
      return;
  }

  let step = eliminationSteps.shift();
  let cells = document.querySelectorAll('.cell');

  step.forEach(index => {
      cells[index].classList.add('hidden');
  });
}
