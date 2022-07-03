import { createContext, Dispatch, ReactNode, useMemo, useReducer } from 'react'

interface InInitialState {
  yearMonth: string
  contents: string[][]
  awards: string[][]
}

const initialState: InInitialState = {
  yearMonth: '2019년 2월 기준',
  contents: [
    ['350만 명', '의 사용자'],
    ['21만 개', '의 리뷰'],
    ['650만 개', '의 저장'],
  ],
  awards: [
    ['google', '2018', '올해의 앱 최우수상 수상'],
    ['apple', '2018', '오늘의 여행앱 선정'],
  ],
}

interface Action {
  type: 'TMP'
  text: string
}

const reducer = (state: InInitialState, action: Action): InInitialState => {
  switch (action.type) {
    case 'TMP':
      return state
    default:
      return state
  }
}

const stateContext = createContext<InInitialState | null>(null)
const dispatchContext = createContext<Dispatch<Action> | null>(null)

function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(() => state, [state])

  return (
    <stateContext.Provider value={value}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </stateContext.Provider>
  )
}

export default ContextProvider
