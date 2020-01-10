export const strict = false

export const state = () => ({
  pageable: undefined,
  pageIndex: 0,
  percent: 0
})

export const mutations = {
  populate(state, pageable) {
    state.pageable = pageable
  },
  nextPage(state) {
    state.pageable.next()
  },
  prevPage(state) {
    state.pageable.prev()
  },
  goto(state, route) {
    state.pageable.scrollToAnchor(route)
  },
  setIndex(state, index) {
    state.pageIndex = index
  },
  setPercentage(state, percent) {
    state.percent = percent
  }
}

export const actions = {
  init({ commit, state }) {
    state.pageable.on('init', (data) => {
      // initializing the page index
      commit('setIndex', data.index)
      commit('setPercentage', data.percent)
    })
    state.pageable.init()
    // set the orientation
    state.pageable.orientate('horizontal') // or vertical
  },
  listen({ commit, state }) {
    state.pageable.on('scroll', (data) => {
      // initializing the page index
      commit('setIndex', data.index)
      commit('setPercentage', data.percent)
    })
  }
}

export const getters = {
  getIndex(state) {
    return state.pageIndex
  },
  getPercentage(state) {
    return state.percent
  }
}
