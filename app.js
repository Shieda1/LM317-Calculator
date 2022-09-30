// https://www.omnicalculator.com/other/lm317

// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const outputvoltageRadio = document.getElementById('outputvoltageRadio');
const resistorR1Radio = document.getElementById('resistorR1Radio');
const resistorR2Radio = document.getElementById('resistorR2Radio');

let outputvoltage;
let resistorR1 = v1;
let resistorR2 = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

outputvoltageRadio.addEventListener('click', function() {
  variable1.textContent = 'Resistor (R1)';
  variable2.textContent = 'Resistor (R2)';
  resistorR1 = v1;
  resistorR2 = v2;
  result.textContent = '';
});

resistorR1Radio.addEventListener('click', function() {
  variable1.textContent = 'Output voltage';
  variable2.textContent = 'Resistor (R2)';
  outputvoltage = v1;
  resistorR2 = v2;
  result.textContent = '';
});

resistorR2Radio.addEventListener('click', function() {
  variable1.textContent = 'Output voltage';
  variable2.textContent = 'Resistor (R1)';
  outputvoltage = v1;
  resistorR1 = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(outputvoltageRadio.checked)
    result.textContent = `Output voltage = ${computeoutputvoltage().toFixed(2)}`;

  else if(resistorR1Radio.checked)
    result.textContent = `Resistor (R1) = ${computeresistorR1().toFixed(2)}`;

  else if(resistorR2Radio.checked)
    result.textContent = `Resistor (R2) = ${computeresistorR2().toFixed(2)}`;
})

// calculation

// VOut = 1.25 * (1 + (R1​ / R2​)​)

function computeoutputvoltage() {
  return (1.25 * (1 + (Number(resistorR1.value) / Number(resistorR2.value)))) + (0.00005 * Number(resistorR2.value));
}

function computeresistorR1() {
  return ((Number(outputvoltage.value) / 1.25) - 1) * Number(resistorR2.value);
}

function computeresistorR2() {
  return Number(resistorR1.value) / ((Number(outputvoltage.value) / 1.25) - 1);
}