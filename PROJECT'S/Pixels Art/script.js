const choiceColors = document.querySelectorAll('.choice-color');
const pixelsContainer = document.querySelector('#pixels-container');
const pixels = document.querySelectorAll('.pixels');
const inputLines = document.querySelector('#input-lines');
const inputColumns = document.querySelector('#input-columns');
const btnOK = document.querySelector('#btn-ok');
const btnR = document.querySelector('#choice-roll');
const inputColor = document.querySelector('#input-color');

// Gera a cor aleatória
const getNumberRandom = () => Math.trunc(Math.random() * 255) + 1;

const getRandomColor = () =>
  `rgb(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()})`;

// Constroi o container de cores
const createColorContainer = () => {
  for (let i = 1; i < choiceColors.length - 2; i += 1) {
    choiceColors[i].style.backgroundColor = getRandomColor();
    choiceColors[0].style.backgroundColor = inputColor.value;
    choiceColors[0].classList.add('select');
    choiceColors[choiceColors.length - 2].style.backgroundColor =
      'rgb(20, 20, 20)';
    choiceColors[choiceColors.length - 2].classList.add('select');
  }
};

// Seleciona a cor
const clearSelectClass = (params) => {
  for (let i = 0; i < choiceColors.length; i += 1) {
    if (choiceColors[i] === choiceColors[params]) {
      choiceColors[i].classList.add('select');
    } else {
      choiceColors[i].classList.remove('select');
    }
  }
};

const selectColor = () => {
  for (let i = 0; i < choiceColors.length; i += 1) {
    choiceColors[i].addEventListener('click', () => {
      clearSelectClass(i);
    });
  }
};

// Constroi o quadro de pixels
const createPixelsBoardLine = (params) => {
  const amountPixels = params;
  for (let i = 1; i <= amountPixels; i += 1) {
    const createDivLine = document.createElement('div');
    pixelsContainer.appendChild(createDivLine);
    createDivLine.classList.add('lines');
  }
};

const createPixelsBoardColumn = (params) => {
  const amountPixels = params;
  const createDivLine = document.querySelectorAll('.lines');
  for (let k = 1; k <= amountPixels; k += 1) {
    for (let i = 0; i < createDivLine.length; i += 1) {
      const createDivColumn = document.createElement('div');
      createDivLine[i].appendChild(createDivColumn);
      createDivColumn.classList.add('pixel');
    }
  }
};

// Pinta o quadro de pixels
const paintPixelsBoard = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', (event) => {
      const select = document.querySelector('.select');
      event.target.style.backgroundColor = select.style.backgroundColor;
    });
  }
};

// Adiciona funções aos inputs e buttons
const clearBoard = () => {
  pixelsContainer.innerHTML = '';
};

const chanceBoardSize = () => {
  btnOK.addEventListener('click', () => {
    if (
      inputLines.value > 65 ||
      inputLines.value < 1 ||
      inputColumns.value > 50 ||
      inputColumns.value < 1
    ) {
      window.alert(`
LINES - MIN VALUE : 1 - MAX VALUE : 65
COLUMNS - MIN VALUE : 1 - MAX VALUE : 50`);
    } else {
      clearBoard();
      createColorContainer();
      createPixelsBoardLine(inputLines.value);
      createPixelsBoardColumn(inputColumns.value);
      selectColor();
      paintPixelsBoard();
    }
  });
};

const rollColors = () => {
  btnR.addEventListener('click', () => {
    createColorContainer();
  });
};

const inputColorChange = () => {
  inputColor.addEventListener('input', () => {
    choiceColors[0].style.backgroundColor = inputColor.value;
  });
};

// window.onload
window.onload = () => {
  createColorContainer();
  createPixelsBoardLine(48);
  createPixelsBoardColumn(24);
  selectColor();
  paintPixelsBoard();
  chanceBoardSize();
  rollColors();
  inputColorChange();
};
