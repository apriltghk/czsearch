import { useMemo, useState } from "react";

import { useSearchParams } from 'next/navigation'
import styles from './list-content.module.css'

import Items from '../Items'
import Paginate from "../Paginate"

export default function ListContent({values}) {

  const searchParams = useSearchParams()

  const page_size = searchParams.get('page_size') || 70
  const total_page = Math.ceil(values.length / page_size)

  const [page, set_page] = useState(1)

  const results = useMemo(() => {
    return values.slice((page-1)*page_size, (page)*page_size)
  }, [page, values, page_size])

  const min_page = Math.max(1, page - 2)
  const max_page = Math.min(total_page, page + 2)
  const back_page = Math.max(1, min_page - 3)
  const forward_page = Math.min(total_page, max_page + 3)

  return (
    <main className={styles.main}>
      <Paginate
        min={min_page}
        max={max_page}
        current={page}
        onSelect={(p) => set_page(p)}
        onBack={min_page > 1 ? () => set_page(back_page) : null}
        onForward={max_page < total_page ? () => set_page(forward_page): null}
      />
      <Items items={results} />
    </main>
  )
}