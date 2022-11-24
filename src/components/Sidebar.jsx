import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50'
            />

            <div className={styles.profile}>
                <Avatar src='https://avatars.githubusercontent.com/u/82336114?s=400&u=18929db694d44ee0bd8856c359c36fc0f55b0224&v=4'/>
                <strong>Fábio Marins</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size='20' />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}