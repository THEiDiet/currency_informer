import React, { useState } from 'react'

import { AnimatePresence } from 'framer-motion'

import { getPercent, getTrimmedValue } from '../../utils'
import { TableRow } from '../tableRow/TableRow'
import { ValuesList } from '../valuesList/ValuesList'

import s from './style/table.module.scss'

export const Table = ({
  keysOfValute,
  valute,
  previousValute,
  lastTenDates,
  filteredObject,
}) => {
  const [activeElement, setActiveElement] = useState('')
  const onClick = value => {
    if (activeElement === value) setActiveElement('')
    else setActiveElement(value)
  }
  return (
    <table className={s.container}>
      <thead className={s.tableHead}>
        <tr className={s.tableHeadRow}>
          <th>Код валюты</th>
          <th>Курс</th>
          <th>Процент</th>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        {keysOfValute &&
          keysOfValute.map(key => {
            const [currentValue, percent, tooltipValue, charCode] = [
              getTrimmedValue(valute[key].Value, valute[key].Nominal),
              getPercent(valute[key].Value, previousValute[key].Value),
              valute[key].Name,
              key,
            ]
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
              <React.Fragment key={key}>
                <TableRow
                  onHandleClick={() => onClick(key)}
                  currentValue={currentValue}
                  percent={percent}
                  tooltipValue={tooltipValue}
                  charCode={charCode}
                  isActive={activeElement === key || false}
                />
                <AnimatePresence>
                  {activeElement === key && (
                    <ValuesList dates={lastTenDates} values={filteredObject[key]} />
                  )}
                </AnimatePresence>
              </React.Fragment>
            )
          })}
      </tbody>
    </table>
  )
}
