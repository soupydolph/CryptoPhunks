import styles from './Link.module.css'

const Link = (props: { url: string, title: string }) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer" className={styles.link}>{props.title}</a>
  )
}

export default Link;