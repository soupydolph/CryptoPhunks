import styles from './Button.module.css'

const Button = (props: { link: string, text: string, alt?: string }) => {
  return (
    <a className={styles.button} href={props.link} target="_blank" rel="">{props.text}</a>
  )
}

export default Button