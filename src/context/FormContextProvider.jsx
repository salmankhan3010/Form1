import React from 'react'
import FormContext from './FormContext'

export default function FormContextProvider({children}) {
    const [data,setData] = React.useState('')
  return (
    <FormContext.Provider value={{data,setData}}>
    {children}
    </FormContext.Provider>
  )
}
