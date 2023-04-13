const dataTable = document.getElementById('data');
const clearButton = document.getElementById('clear-highscores');

const data = localStorage.getItem('highscores');

const highscores = data ? JSON.parse(data) : [];

function init() {
  highscores
    ?.sort((a, b) => b.score - a.score)
    ?.forEach((score, i) => {
      const trEl = document.createElement('tr');
      const tdPlace = document.createElement('td');
      tdPlace.innerText = i + 1;
      const tdInitial = document.createElement('td');
      tdInitial.innerText = score.initials;
      const tdScore = document.createElement('td');
      tdScore.innerText = score.score;
      trEl.append(tdPlace, tdInitial, tdScore);
      dataTable.append(trEl);
    });

  clearButton.addEventListener('click', () => {
    localStorage.setItem('highscores', '');
    location.reload();
  });
}

document.addEventListener('DOMContentLoaded', init);
