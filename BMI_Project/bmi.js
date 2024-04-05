const form = document.querySelector('form')

//**NOTE => this usecase will give you empty
  // const height = parseInt(document.querySelector("#height").value)


form.addEventListener('submit',function (e) {
  e.preventDefault()  


  const height = parseInt(document.querySelector('#height').value)
  const width = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `plese Enter your valid height ${height}`
  } else if (width === '' || width < 0 || isNaN(width)) {
    results.innerHTML = `plese Enter your valid height ${width}`;
  } else {
    const bmi = (width / ((height * height) / 10000)).toFixed(2);
   
   
    let range = '';
    if (bmi <= 18.6) {
      range = ("under weight");
    } else if (bmi <= 18.6 && bmi >= 24.9) {
      range = "Normal Range";
    } else {
      range = "overweight";
    }
   
    // Show the result
    results.innerHTML = `<span>${bmi}</span>, your range is = ${range}`

    const color = results.querySelector('range')
    color.style.color = 'red'
    
  }

  
   
  
  
})







