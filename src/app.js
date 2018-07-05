
import Counter from './components/counter'
import Controls from './components/controls'

import store from './store'

function increment () {
  ++store.state.count
}

function decrement () {
  console.log('decrement start')
  --store.state.count
}

export default () => `
<div>
  <h1>Simple App</h1>
  ${Counter(store.state.count)}
  ${Controls(increment, decrement)}
</div>
`
