import React from 'react'

import { motion } from 'framer-motion'

import s from './style/valuesList.module.scss'

export const ValuesList = ({ dates, values }) => {
  const motionValues = [{ height: 0 }, { height: 'auto' }]
  return (
    <>
      <motion.tr
        className={`${s.valuesList} ${s.header}`}
        initial={motionValues[0]}
        animate={motionValues[1]}
        exit={motionValues[0]}
      >
        <th>Значения за последние десять дней</th>
      </motion.tr>
      <motion.tr
        className={`${s.valuesList} ${s.dates}`}
        initial={motionValues[0]}
        animate={motionValues[1]}
        exit={motionValues[0]}
      >
        {dates.map(date => (
          <td style={{ height: 20 }} key={date}>
            {date}
          </td>
        ))}
      </motion.tr>
      <motion.tr
        className={`${s.valuesList} ${s.values}`}
        initial={motionValues[0]}
        animate={motionValues[1]}
        exit={motionValues[0]}
      >
        {values.map(value => (
          <td style={{ height: 20 }} key={value}>
            {value.toString().replace('.', ',')}
          </td>
        ))}
      </motion.tr>
    </>
  )
}
