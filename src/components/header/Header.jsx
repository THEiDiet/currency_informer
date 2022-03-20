import React from 'react'

import { ReactComponent as Logo } from '../../assets/dollar.svg'

import s from './style/header.module.scss'

export const Header = () => (
  <div className={s.header}>
    <div className={s.container}>
      <span>Валютный информатор</span>
      <Logo className={s.logo} />
    </div>
  </div>
)
