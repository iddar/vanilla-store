
import App from './app'
import store from './store'

function render (mountPoint, app) {
  document.querySelector(mountPoint).innerHTML = app
}

render('#appContainer', App())
store.render = function () {
  render('#appContainer', App())
}
