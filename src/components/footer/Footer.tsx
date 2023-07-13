import React from 'react'
import logo from '../../images/logo-footer.png'
import styles from './footer.module.css'
import facebook from '../../icons/icon_facebook.png'
import twitter from '../../icons/icon_twitter.png'
import linkedin from '../../icons/icon_linkedin.png'
import youtube from '../../icons/icon_youtube.png'
import dribble from '../../icons/icon_dribbble.png'

const Footer = () => {
    return (
        <footer>

            <div className={styles.footer_content}>
                <ul className={styles.list}>
                    <li>Activity Type</li>
                    <li>Attractions</li>
                    <li>Suitability</li>
                    <li>Company</li>
                    <li>Follow us
                    <span className={styles.flex}><img src={facebook} alt="" /><img src={twitter} alt="" /><img src={linkedin} alt="" /><img src={youtube} alt="" /><img src={dribble} alt="" /></span>
                    </li>
                </ul>
              
            </div>
            
        </footer>
    )
}

export default Footer