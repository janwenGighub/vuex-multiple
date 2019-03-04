export const addHobbyList = (state, newArr) => {
  state.hobbyArr = newArr
}

export const addSelectList = (state, newArr) => {
  state.selectArr = newArr
}

export const delListArr = (state, name) => {
  state.hobbyArr = state.hobbyArr.filter((item) => {
    return item.name !== name
  })
  state.selectArr = state.selectArr.filter((item) => {
    return item.name !== name
  })
}