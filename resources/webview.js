// disable the context menu (eg. the right click menu) to have a more native feel
// document.addEventListener('contextmenu', (e) => {
//   e.preventDefault()
// })

// call the plugin from the webview
document.getElementById('button').addEventListener('click', () => {
  window.postMessage('nativeLog', 'Called from the webview')
})

// call the webview from the plugin
window.setRandomNumber = (randomNumber) => {
  document.getElementById('answer').innerHTML = 'Random number from the plugin: ' + randomNumber
}

document.getElementById('img').addEventListener('click', () => {
  console.log('img click')
})
document.getElementById('img').addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('', 'eliminateDropImageElement');
})
document.getElementById('img').addEventListener('dragend', (e) => {
  const position = { x: e.screenX, y: e.screenY };
  console.log(position);
})
