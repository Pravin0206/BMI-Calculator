const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Please give valid height"
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give valid weight"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        // Display BMI
        // result.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) {
            result.innerHTML = `<span>BMI:- ${bmi}<br>Under Weight</span>`
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            result.innerHTML = `<span>BMI:- ${bmi}<br>Normal Range</span>`
        }
        else {
            result.innerHTML = `<span>BMI:- ${bmi}<br>Over Weight</span>`
        }
    }


})