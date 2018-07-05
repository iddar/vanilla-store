
export default (increment, decrement) => `
  <div>
    <button onClick="(${decrement.toLocaleString()})()">-</button>
    <button onClick="(${increment.toLocaleString()})()">+</button>
  </div>
`
