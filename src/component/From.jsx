import React, { useState, useContext } from 'react'
import FormContext from '../context/FormContext'
function From() {
    const [name, setName] = useState('')
    const [enrollNum, setEnrollNum] = useState('')
    const {setData} = useContext(FormContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setData({name,enrollNum})
        console.log(name)
        console.log(enrollNum)
    }
    return (
        <div className=' inline-grid gap-6 mt-20'>
            <input className=' p-4 border-4 rounded-xl w-50'
                value={name} onChange={(e) => setName(e.target.value)}
                type='text' placeholder='Enter Your Name'></input>
            <input className=' p-4 border-4 rounded-xl w-50'
                value={enrollNum} onChange={(e) => setEnrollNum(e.target.value)}
                type='text' placeholder='Enter Your Roll No'></input>
            <button onClick={handleSubmit} className=' bg-slate-800 text-white font-bold p-4 rounded-xl'>Submit</button>
        </div>
    )
}

export default From