import React from 'react'

import s from './style/tableCol.module.scss'

export const TableCol = ({ value, showPercent = false }) => {
  const valueNumber = +value
  if (Number.isFinite(valueNumber) && showPercent) {
    return (
      <td
        className={`${s.tableCol} ${
          valueNumber > 0 ? s.tableColLower : s.tableColHigher
        }`}
      >
        {value.replace('.', ',').replace('-', '')} %
      </td>
    )
  }
  return <td className={s.tableCol}>{value}</td>
}
