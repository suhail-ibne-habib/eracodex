import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img 
              src="/logo.png" 
              alt="Eracodex Logo" 
              width={140} 
              height={40} 
              className={styles.logoImage}
            />
          </div>
          <p className={styles.mission}>
            Delivering high-performance Web, SaaS, FinTech & AI solutions to global clients.
          </p>
        </div>
        
        <div className={styles.center}>
          <h4 className={styles.footerTitle}>Services</h4>
          <ul className={styles.footerList}>
            <li><Link href="#ui-ux" className={styles.footerLink}>UI/UX Design</Link></li>
            <li><Link href="#web-dev" className={styles.footerLink}>Web Development</Link></li>
            <li><Link href="#automation" className={styles.footerLink}>Automation & AI</Link></li>
            <li><Link href="#social-media" className={styles.footerLink}>Social Media Strategy</Link></li>
            <li><Link href="#branding" className={styles.footerLink}>Logo & Branding</Link></li>
          </ul>
        </div>

        <div className={styles.right}>
          <h4 className={styles.footerTitle}>Connect</h4>
          <ul className={styles.footerList}>
            <li><a href="https://www.facebook.com/eracodex247" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Facebook</a></li>
            <li><Link href="#book" className={styles.footerLink}>Book a Call</Link></li>
          </ul>
          
          <h4 className={`${styles.footerTitle} ${styles.legalTitle}`}>Legal</h4>
          <ul className={styles.footerList}>
            <li><Link href="#" className={styles.footerLink}>Terms & Conditions</Link></li>
            <li><Link href="#" className={styles.footerLink}>Refund Policy</Link></li>
            <li><Link href="#" className={styles.footerLink}>Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
