// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import React from 'react'
import {Switch} from '../switch'

const ToggleContext = React.createContext()

function useToggle() {
  const context = React.useContext(ToggleContext);
  if (!context) {
    throw new Error('ToggleContext missing')
  }
  return context
}

function Toggle({onToggle, children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return <ToggleContext.Provider value={[on, toggle]} children={children} />
}

function ToggleOn({ children }) {
  const [on] = useToggle()
  return on ? children : null
}

function ToggleOff({children}) {
  const [on] = useToggle()
  return on ? null : children
}

function ToggleButton(props) {
  const [on, toggle] = useToggle()
  return <Switch on={on} onClick={toggle} {...props} />
}

const App = () => <ToggleButton />

export default App

/*
eslint
  no-unused-vars: "off",
*/
