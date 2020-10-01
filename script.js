const btn = document.querySelector('#j-btn');

btn.addEventListener('click', () => {
  const value1 = document.querySelector('#j-inpt-1').value;
  const value2 = document.querySelector('#j-inpt-2').value;
  //console.log(value1)
  if (100 <= +value1 <= 300 && 100 <= +value2 <= 300){
    fetch(`https://picsum.photos/${value1}/${value2}`)
      .then((response) => {
        const result = response.json();
        return result;
      })
      .then((data) => {console.log(data)})
      .catch(() => { console.log('error') })
  } else {
    console.log('Одно из чисел вне диапазона ')
  }
})
