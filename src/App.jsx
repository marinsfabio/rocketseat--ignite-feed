import { Header } from '../src/components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/82336114?s=400&u=18929db694d44ee0bd8856c359c36fc0f55b0224&v=4',
      name: 'Fábio Marins',
      role: 'Desenvolvedor Web'
    },

    content: [
      { type: 'paragraph', content: 'Fala Galera!!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio' },
      { type: 'link', content: 'fabiomarinspro@hotmail.com' }
    ],

    publishedAt: new Date('2022-11-26 09:34:00')
  },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
