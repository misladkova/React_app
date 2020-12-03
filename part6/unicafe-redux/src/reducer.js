const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const a = {...state}
      a.good = a.good+1
      return a
    case 'OK':
      const b = {...state}
      b.ok = b.ok+1
      return b
    case 'BAD':
      const c = {...state}
      c.bad = c.bad+1
      return c
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer