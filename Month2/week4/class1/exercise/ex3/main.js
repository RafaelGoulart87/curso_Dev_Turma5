const calculator = {
    somar: (numberOne, numberTwo) => numberOne + numberTwo,
    subtrair: (numberOne, numberTwo) => numberOne - numberTwo,
    multiplicar: (numberOne, numberTwo) => numberOne * numberTwo,
    dividir: (numberOne, numberTwo) => numberOne / numberTwo,
};

const operations = {
    somar: '+',
    subtrair: '-',
    multiplicar: 'x',
    dividir: ':',
};

window.onload = () => {
    const buttonResult = document.querySelector('button');

    const results = document.querySelector('#results');

    buttonResult.addEventListener('click', () => {
        const [inputA, inputB] = document.querySelectorAll('input');
        const operation = document.querySelector('select').value;

        const result = document.createElement('p');
        result.innerHTML = `${inputA.value} ${operations[operation]} ${
        inputB.value
      } = ${calculator[operation](
        Number.parseInt(inputA.value),
        Number.parseInt(inputB.value)
      )}`;

        results.appendChild(result);
    });
};