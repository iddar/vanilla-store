
import Counter from './counter'
import Controls from './controls'

function increment () {
  window.store.state = {
    count: ++window.store.state.count
  }
}

function decrement () {
  window.store.state = {
    count: --window.store.state.count
  }
}

export default () => `
  <div>
    ${Counter(window.store.state.count)}
    ${Controls(increment, decrement)}
  </div>
`
