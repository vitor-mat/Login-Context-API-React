import { React, useState, useContext } from 'react'

import { FormStyle } from "./styles"

import { MyContext } from "../../context/AuthContext"

export const Form = () => {

    const { handleUserName } = useContext(MyContext)

    return(
        <FormStyle>
            <h1>Welcome</h1>
            <input placeholder="User Name" onChange = {handleUserName}/>
            <input placeholder="Password"/>
            <button>Log in</button>
        </FormStyle>
    )
}