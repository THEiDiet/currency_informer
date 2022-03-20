import React, { useState } from 'react'

import { TableCol } from '../tableCol/TableCol'
import { Tooltip } from '../tooltip/Tooltip'

import s from './style/tableRow.module.scss'

export const TableRow = props => {
  const { currentValue, percent, tooltipValue, charCode, onHandleClick, isActive } = props
  const [isFocused, setIsFocused] = useState(false)
  const onMouseOver = () => {
    setIsFocused(true)
  }
  const onMouseLeave = () => {
    setIsFocused(false)
  }
  return (
    <tr
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
      onMouseLeave={onMouseLeave}
      className={`${s.tableRow} ${isActive ? s.activeTableRow : ''}`}
      onClick={onHandleClick}
    >
      <TableCol value={charCode} />
      <TableCol value={currentValue} />
      <TableCol value={percent} showPercent />
      {isFocused && <Tooltip valuteName={tooltipValue} />}
    </tr>
  )
}
