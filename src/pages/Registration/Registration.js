import React from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '../../utils/routes'

const Registration = () => {
  return (
    <div>
      <h1>Страница Регистрации</h1>
      <Link to={Routes.SignInRoute}>
        <span>Назад</span>
      </Link>
    </div>
  )
}

export default Registration
