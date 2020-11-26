import React from 'react'
import spinnerImg from '../../img/spinner.gif'

const Loading = () =>{
    return (
        <div className="center" >
            <img src={spinnerImg} alt="Spinner"/>
        </div>
    )
}

export default Loading