import styles from './styles.module.scss';

import avatar from '../../../../assets/images/avatar.png'
import spotify from '../../../../assets/icons/спотик.svg'
import discord from '../../../../assets/icons/дс.svg'
import telegram from '../../../../assets/icons/тг.svg'
import github from '../../../../assets/icons/гитхаб.svg'
import steam from '../../../../assets/icons/стим.svg'


export function ContentBox(){

    return (
        <>
            <div className={styles.contentbox}>
                <img src={avatar} alt="avatar" className={styles.contentbox__avatar} />
                <div className={styles.contentbox__textblock}>
                    <h1 className={styles.contentbox__textblock_title}>Qurti</h1>
                    <p className={styles.contentbox__textblock_subtitle}>I can't find it</p>
                </div>
                <div className={styles.contentbox__linkblock}>
                    <h2 className={styles.contentbox__linkblock_title}>My links</h2>
                    <div className={styles.contentbox__linkblock_links}>
                        {/* discord */}
                        <a className={styles.contentbox__linkblock_icon} target="_blank" href="https://discordapp.com/users/698260415204950228/">
                            <img src={discord} alt="discord" />
                        </a>
                        {/* spotify */}
                        <a className={styles.contentbox__linkblock_icon} target="_blank" href="https://open.spotify.com/user/31z24lsjangowrkyq7rj6uhcn77m">
                            <img src={spotify} alt="spotify" />
                        </a>
                        {/* tg */}
                        <a className={styles.contentbox__linkblock_icon} target="_blank" href="https://t.me/justqurti">
                            <img src={telegram} alt="telegram" />
                        </a>
                        {/* github */}
                        <a className={styles.contentbox__linkblock_icon} target="_blank" href="https://github.com/qurtii">
                            <img src={github} alt="github" />
                        </a>
                        {/* steam */}
                        <a className={styles.contentbox__linkblock_icon} target="_blank" href="https://steamcommunity.com/id/qurti/">
                            <img src={steam} alt="steam" />
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}