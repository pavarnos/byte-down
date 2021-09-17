export const state = () => ({
  holes: [],
  notes: []
})

export const mutations = {
  // text is a string that describes which holes you have found
  addHole (state, text) {
    if (state.holes.indexOf(text) === -1) {
      state.holes.push(text)
    }
  },
  addNote (state, text) {
    if (state.notes.indexOf(text) === -1) {
      state.notes.push(text)
    }
  },
  // clear all state back to empty
  reset (state) {
    state.holes.length = 0
    state.notes.length = 0
  },
}
