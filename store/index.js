export const state = () => ({
  holes: []
})

export const mutations = {
  // text is a string that describes which holes you have found
  add (state, text) {
    if (state.holes.indexOf(text) === -1) {
      state.holes.push(text)
    }
  },
  // clear all state back to empty
  reset (state) {
    state.holes.length = 0
  },
}
