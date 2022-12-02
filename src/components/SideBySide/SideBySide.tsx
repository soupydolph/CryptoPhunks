import styles from './SideBySide.module.css'

const SideBySide = (props: { title: string, link: string, text: string, image: string, reverse: boolean, customClass?: string }) => {

  return (
    <div className={`${styles.container} ${props.reverse ? styles.reverse : ''} ${props.customClass ? styles[props.customClass] : ''} `}>
      <div className={`${styles.element} ${styles['side-by-side__text']}`}>
        <h3 className="title">{props.title}</h3>
        <p>{props.text}</p>
        <a className={styles.button} href={props.link} target="_blank" rel="">Visit</a>
      </div>
      <div className={`${styles.element} ${styles['side-by-side__image']}`}>
        <img src={props.image} alt="" />
      </div>
    </div>
  )
}

export default SideBySide