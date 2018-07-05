
import Counter from './components/counter'
import Controls from './components/controls'

const state = {
  count: 0
}

function increment () {
  ++state.count
}

function decrement () {
  console.log('decrement start')
  --state.count
}

export default () => `
<div>
  <h1>Simple App</h1>
  ${Counter(state.count)}
  ${Controls(increment, decrement)}
</div>
`
