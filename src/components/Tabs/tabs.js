import React from 'react'
import styles from './tabs.module.css'

const Tabs = ({
  tabs,
  value,
  onChange = () => {},
}) => {
  const activeTab = value || tabs[0].key

  const handleTabClick = (key) => {
    onChange(key)
  }

  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={activeTab === tab.key ? styles.active : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tab_content}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={activeTab === tab.key ? '' : styles.invisible}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
