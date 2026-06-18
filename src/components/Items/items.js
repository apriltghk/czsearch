
import styles from './items.module.css'

export default function Items({items}) {

  return (
    <div className={styles.items}>
      {
        items.map(item=>{
          const {
            tt, aa, id, dd,
          } = item
          return (
            <div className={styles.items_item} key={`n_${id}`}>
              <a
                href={`https://czbooks.net/n/${id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.item_title}>
                  {tt}
                </div>
              </a>
              <div className={styles.item_detail}>
                <div>{`作者: ${aa}`}</div>
                <div>{dd}</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}