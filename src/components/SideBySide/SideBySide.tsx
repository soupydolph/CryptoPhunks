import { ReactElement } from 'react'
import styles from './SideBySide.module.css'

const SideBySide = (
  props: {
    title: string,
    link?: string,
    image: string,
    reverse: boolean,
    customClass?: string,
    children?: ReactElement,
    media: string,
    shouldHideLink?: boolean
  }) => {
  return (
    <div className={`${styles.container} ${props.reverse ? styles.reverse : ''} ${props.customClass ? styles[props.customClass] : ''} `}>
      <div className={`${styles.element} ${styles['side-by-side__text']}`}>
        <h3 className="title">{props.title}</h3>
        {props.children}

        {!props.shouldHideLink ? (<a className={styles.button} href={props.link} target="_blank" rel="">visit</a>) : ''}


      </div>
      <div className={`${styles.element} ${styles['side-by-side__image']}`}>
        {props.media === 'image'
          ? (
            <img src={props.image} alt="" />
          )
          : (
            <video className={styles.video} controls>
              <source src={props.image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        }
      </div>
    </div>
  )
}

export default SideBySide