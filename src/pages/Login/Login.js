import React from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '../../utils/routes'

const Login = () => {
  return ( 
    <div>
      <h1>Страница Логина</h1>
      <Link to={Routes.SignUpRoute}>
        <span>Зарегестрироваться</span>
      </Link>
    </div>
  )
}

export default Login
