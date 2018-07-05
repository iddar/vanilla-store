
class CreateStore {
  constructor (config) {
    this.store = {
      count: 5,
      count2: 3
    }
  }

  get state () {
    return this.store
  }

  set state (params) {
    Object.assign(this.store, params)
    this.onChange()
  }

  commit (action) {
    this.actions[action](this.state)
  }

  onChange () {
    this.render && this.render()
  }
}

const store = new CreateStore()
window.store = store
export default store
