import { useState } from 'react'
import FormContextProvider from './context/FormContextProvider'
import Table from './component/Table'
import './App.css'
import From from './component/From'
function App() {

  return (
    <FormContextProvider>
      <From />
      <Table />
    </FormContextProvider>
  )
}

export default App
