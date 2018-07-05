
import App from './app'

function render (mountPoint, app) {
  document.querySelector(mountPoint).innerHTML = app
}

render('#appContainer', App())
