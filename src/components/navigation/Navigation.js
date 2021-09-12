import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Routes } from '../../utils/routes'
import './Navigation.scss'

const Navigation = () => {

  const history = useHistory()

  const [activeRoute, setActiveRoute] = useState(history.location.pathname)

  useEffect(() => {
    return history.listen((location) => { 
      setActiveRoute(location.pathname);
    })
  }, [history])

  return (
    <div className='navigation-container'>
      <Link to={Routes.TasksRoute}>
        <div className={activeRoute === Routes.TasksRoute ? 'navigation-item-active' : 'navigation-item'}>
            Мои задачи
        </div>
      </Link>

      <Link to={Routes.UsersRoute}>
        <div className={activeRoute === Routes.UsersRoute ? 'navigation-item-active' : 'navigation-item'}>
            Пользователи
        </div>
      </Link>

      <Link to={Routes.SignInRoute}>
        <div className={activeRoute === Routes.SignInRoute ? 'navigation-item-active' : 'navigation-item'}>
            Выход
        </div>
      </Link>
    </div>
  )
}

export default Navigation
