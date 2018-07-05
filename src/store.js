
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
  }
}

const store = new CreateStore()
export default store
