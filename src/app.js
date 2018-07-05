
import Counter from './components/counter'
import Controls from './components/controls'

export default () => `
<div>
  <h1>Simple App</h1>
  ${Counter(10)}
  ${Controls()}
</div>
`
