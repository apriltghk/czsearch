
import styles from './cat-page.module.css'

import { Suspense, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import SearchContent from '../SearchContent'
import ListContent from '../ListContent'
import Tabs from '../Tabs/tabs'

export default function CatPage({
  values=[],
  show_cats=false,
}){

  const pathname = usePathname()
  const [tab_key, set_tab_key] = useState('search')

  const tabs = [
    {
      key: 'search',
      label: '搜尋',
      content: <SearchContent values={values} />
    },
    {
      key: 'list',
      label: '最新',
      content: <Suspense fallback={<div>Loading...</div>}>
        <ListContent values={values} />
      </Suspense>
    },
  ]

  const cats = [
    {
      key: 'danmei',
      link: '/c/danmei',
      label: '耽美',
    },
    {
      key: 'blerotic',
      link: '/c/blerotic',
      label: '耽美工口',
    }
  ]

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Link href={'/'}>
          <div className={styles.title}>{'狂人目錄'}</div>
        </Link>
        {
          !!show_cats &&
          <div className={styles.cats}>
            {
              cats.map(cat => (
                <Link
                  key={`cat_${cat.key}`}
                  href={cat.link}
                >
                  <div className={`${styles.cat} ${pathname === cat.link ? styles.cat_active : ''}`}>
                    {cat.label}
                  </div>
                </Link>
              ))
            }
          </div>
        }
      </div>
      <Tabs value={tab_key} tabs={tabs} onChange={(key) => set_tab_key(key)} />
      <footer className={styles.footer}>
        {`--- v${process.env.APP_VERSION} ---`}
      </footer>
    </div>
  )
}