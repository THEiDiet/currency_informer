import { useEffect, useState } from 'react'

import s from './App.module.scss'
import { Header } from './components/header/Header'
import { Loader } from './components/loader/Loader'
import { Table } from './components/table/Table'
import { SessionStorage } from './constants'
import { getFilteredList, getLastTenCurrencyList } from './utils'

const App = () => {
  const [valute, setValute] = useState({})
  const [lastTenDates, setLastTenDates] = useState([])
  const [previousValute, setPreviousValute] = useState({})
  const [keysOfValute, setKeysOfValute] = useState(null)
  const [isLoadingEnded, setIsLoadingEnded] = useState(false)
  const [filteredObject, setFilteredObject] = useState({})
  const handleSetCurrencyList = list => {
    setValute(list[0].Valute)
    setPreviousValute(list[1].Valute)
    setKeysOfValute(Object.keys(list[0].Valute))
    getFilteredList(Object.keys(list[0].Valute), list)
    const { currencyObject, dates } = getFilteredList(Object.keys(list[0].Valute), list)
    setFilteredObject(currencyObject)
    setLastTenDates(dates)
    setIsLoadingEnded(true)
  }
  useEffect(() => {
    if (!sessionStorage.getItem(SessionStorage.CurrencyKey)) {
      getLastTenCurrencyList(
        'https://www.cbr-xml-daily.ru/daily_json.js',
        handleSetCurrencyList,
      )
    } else
      handleSetCurrencyList(
        JSON.parse(sessionStorage.getItem(SessionStorage.CurrencyKey)),
      )
    return () => {
      sessionStorage.removeItem(SessionStorage.CurrencyKey)
    }
  }, [])
  return (
    <div className={s.app}>
      <Header />
      {!isLoadingEnded && <Loader />}
      {isLoadingEnded && (
        <Table
          keysOfValute={keysOfValute}
          valute={valute}
          filteredObject={filteredObject}
          lastTenDates={lastTenDates}
          previousValute={previousValute}
        />
      )}
    </div>
  )
}

export default App
