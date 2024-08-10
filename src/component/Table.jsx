import React, { useContext } from 'react'
import FormContext from '../context/FormContext'

function Table() {
    const { data } = useContext(FormContext)
    return (
        <div>
            <tbody>
                <tr>
                    <td>Your Name</td>
                    <td>Your Enrollment Number</td>
                </tr>
                <tr>
                    <td>
                        {data.name}
                    </td>
                    <td>
                        {data.enrollNum}
                    </td>

                </tr>
            </tbody>
        </div>
    )
}

export default Table