
class CreateStore {
  constructor (config) {
    this.store = {
      count: 5
    }
  }

  get state () {
    return this.store
  }

  set state (params) {
    Object.assign(this.store, params)
    console.log('change value')
    this.onChange()
  }

  commit (action) {
    this.actions[action](this.state)
  }

  onChange () {
    console.log('onChange...')
    this.render && this.render()
  }
}

const store = new CreateStore()
window.store = store
export default store
