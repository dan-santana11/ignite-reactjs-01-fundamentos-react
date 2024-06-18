import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(comment) {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/dan-santana11.png" alt=""/>

            <div className={styles.commentBox}>
                <div  className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daniel Santana</strong>
                            <time title="11 de Maio ás 08:13h" dateTime="2024-06-13 08:13:30">Cerca de 1h átras</time>
                        </div>
                        <footer>
                            <button>
                                <Trash size={20}/>
                            </button>
                        </footer>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}