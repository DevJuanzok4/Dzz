const createStore = Framework7.createStore


let history = localStorage.getItem('history')
history = !!history ? JSON.parse(history) : []

const store = createStore({
  state: {
    
    scan: {},
    
    history
  },
  getters: {
    
    scan ({ state }) {
      return state.scan
    },
    
    history ({ state }) {
      return state.history
    }
  },
  actions: {
    addScan ({ state }, scan) {
      state.scan = scan
      state.history = [...state.history, scan]
      localStorage.setItem('history', JSON.stringify(state.history))
    }
  }
})
