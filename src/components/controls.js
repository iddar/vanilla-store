
export default (increment, decrement) => `
  <div>
    <button onClick="(${decrement.toLocaleString()})()">-</button>
    <button>+</button>
  </div>
`
