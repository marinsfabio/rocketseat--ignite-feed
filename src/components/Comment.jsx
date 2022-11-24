import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false}
        src='https://avatars.githubusercontent.com/u/82336114?s=400&u=18929db694d44ee0bd8856c359c36fc0f55b0224&v=4'
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fabio Marins</strong>
              <time>cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon,  parabens!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}