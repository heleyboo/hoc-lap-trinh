function batDen() {
  const den = document.getElementById('den');
  den.src = 'pic_bulbon.gif'
  console.log('Bat den')
}
function tatDen() {
  const den = document.getElementById('den');
  den.src = 'pic_bulboff.gif'
}

function enter() {
  const input = document.getElementById('input')
  const output = document.getElementById('output')
  output.innerText = input.value
}

function an() {
  document.getElementById('output').style.display = 'none'
}