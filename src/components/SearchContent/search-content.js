
import { useState } from 'react'

import styles from './search-content.module.css'

import Items from '../Items'

export default function SearchContent({values}){

  const [text, set_text] = useState('')
  const [results, set_results] = useState([])
  const [keyword, set_keyword] = useState('')

  const handleChange = (e) => {
    const kw = e.target.value
    set_text(kw);
  }

  const handleSearch = () => {
    const kw = text.trim()
    if (!kw) {
      set_results([])
      set_keyword(kw)
      return
    }
    const regex = new RegExp(kw, 'i')
    const res = values.filter(({tt, aa}) => {
      return regex.test(aa) || regex.test(tt)
    })
    set_results(res)
    set_keyword(kw)
  }

  return (
    <main className={styles.main}>
      <div className={styles.input_group}>
        <input
          className={styles.search_input}
          name={'search'}
          type="text"
          value={text}
          onChange={handleChange}
        />
        <div className={styles.search_button} onClick={handleSearch}>
          {'搜尋'}
        </div>
      </div>
      {
        !!keyword &&
        <div className={styles.result_count}>{`「${keyword}」有${results.length}個搜尋結果`}</div>
      }
      {
        !keyword &&
        <div className={styles.result_count}>{`請輸入書名或作者搜尋`}</div>
      }
      <Items items={results} />
    </main>
  )
}