import React from 'react'
import logo from '../../images/logo-footer.png'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <footer>
        
<div className={styles.footer_content}>
<div><img src={logo} alt="" /></div>
 <ul className={styles.list}>
        <li>Activity Type</li>
        <li>Attractions</li>
        <li>Suitability</li>
        <li>Company</li>
        <li>Follow us</li>
    </ul>
</div>
    </footer>
  )
}

export default Footer