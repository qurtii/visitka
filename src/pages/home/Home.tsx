import { ContentBox } from './components/ContentBox/ContentBox';
import styles from './styles.module.scss';

export function Home(){

    return(
        <>
            <div className={styles.background}>
                <div className={styles.container}>
                    <ContentBox />
                </div>
            </div>
        </>
    )
}