import styles from './Button.module.css'

const Button = (props: { link: string, text: string, alt?: string, autoMargin?: boolean }) => {
  return (
    <a className={`
        ${styles.button} 
        ${props.autoMargin ? styles['button-auto'] : ''}
      `}
      href={props.link}
      target="_blank"
      rel="">
      {props.text}
    </a>
  )
}

export default Button