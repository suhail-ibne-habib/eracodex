import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.gridBackground} />
      <div className={styles.backgroundGlow} />
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.topText}>Scale Your Business</span>
          <br />
          <span className={styles.bottomText}>With Modern Digital Solutions</span>
        </h1>
        
        <p className={styles.subtitle}>
          Global agency delivering high-performance Web, SaaS, FinTech, and AI solutions to clients worldwide.
        </p>
        
        <div className={styles.ctaWrapper}>
          <a href="#book" className={styles.primaryButton}>Book a Call</a>
        </div>

        <div className={styles.socialProof}>
          <div className={styles.avatars}>
            <div className={styles.avatar} style={{ zIndex: 5, backgroundImage: 'url(https://i.pravatar.cc/100?img=1)' }}></div>
            <div className={styles.avatar} style={{ zIndex: 4, backgroundImage: 'url(https://i.pravatar.cc/100?img=2)' }}></div>
            <div className={styles.avatar} style={{ zIndex: 3, backgroundImage: 'url(https://i.pravatar.cc/100?img=3)' }}></div>
            <div className={styles.avatar} style={{ zIndex: 2, backgroundImage: 'url(https://i.pravatar.cc/100?img=4)' }}></div>
            <div className={styles.avatar} style={{ zIndex: 1, backgroundImage: 'url(https://i.pravatar.cc/100?img=5)' }}></div>
          </div>
          <span className={styles.proofText}>Trusted by 35,000+ Followers & Global Clients</span>
        </div>
      </div>
    </section>
  );
}
