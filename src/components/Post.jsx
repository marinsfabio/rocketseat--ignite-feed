import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post() {
  return (
    <article className={styles.post}>
      
      <header>
        <div className={styles.author}>
          <Avatar className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/82336114?s=400&u=18929db694d44ee0bd8856c359c36fc0f55b0224&v=4" />
          <div className={styles.authorInfo}>
            <strong>Fabio Marins</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time>Publicado a 1h</time>
      </header>
      
      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto no meu portifolio</p>
       <p><a href=''>fabiodev/devmarins</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat </a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />

        <button type='submit'>comentar</button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    
    </article>
  )
}
