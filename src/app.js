
import Counter from './components/counter'
import Controls from './components/controls'

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
  <h1>Simple App</h1>
  ${Counter(window.store.state.count)}
  ${Controls(increment, decrement)}
</div>
`
