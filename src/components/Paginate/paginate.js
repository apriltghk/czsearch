import styles from './paginate.module.css'
export default function Paginate({
  current,
  min,
  max,
  keyExtractor=(p)=>`p_${p}`,
  onSelect=(p)=>{},
  onBack,
  onForward,
}) {
  const range = Array(max - min + 1).fill().map((_, i) => min + i)

  return (
    <div className={styles.paginate}>
      {
        !!onBack &&
        <div
          className={styles.item}
          onClick={onBack}
        >
          {'<'}
        </div>
      }
      {
        range.map(p=>{
          return (
            <div
              className={`${styles.item} ${p===current ? styles.active : ''}`}
              key={keyExtractor(p)}
              onClick={() => onSelect(p)}
          >
            {p}
          </div>
          )
        })
      }
      {
        !!onForward &&
        <div
          className={styles.item}
          onClick={onForward}
        >
          {'>'}
        </div>
      }
    </div>
  )
}