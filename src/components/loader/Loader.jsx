import React from 'react'

import duck from '../../assets/duck.gif'

import s from './style/loader.module.scss'

export const Loader = () => <img src={duck} className={s.loader} alt="duck" />
