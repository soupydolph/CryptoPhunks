import styles from './SideBySide.module.css'

const SideBySide = (props: { title: string, link: string, text: string, image: string, reverse: boolean }) => {

  return (
    <div className={`${styles.container} ${props.reverse ? styles.reverse : ''}`}>
      <div className={`${styles.element} ${styles['side-by-side__text']}`}>
        <h3 className="title">{props.title}</h3>
        <p>{props.text}</p>
        <button>Visit</button>
        <button>Learn more</button>
      </div>
      <div className={`${styles.element} ${styles['side-by-side__image']}`}>
        <img src={props.image} alt="" />
      </div>
    </div>
  )
}

export default SideBySide