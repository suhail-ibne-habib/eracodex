import styles from './ValueProp.module.css';

export default function ValueProp() {
  return (
    <section className={styles.valueProp}>
      <div className={styles.container}>
        
        <div className={styles.headlineWrapper}>
          <h2 className={styles.headline}>
            Empowering global brands with high-performance Web, SaaS, and FinTech solutions.
          </h2>

          {/* Floating Tags */}
          <div className={`${styles.floatingTag} ${styles.tag1}`}>
            <span>SaaS & FinTech</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 7-5-5-5 5"/><path d="m17 17-5 5-5-5"/></svg>
          </div>

          <div className={`${styles.floatingTag} ${styles.tag2}`}>
            <span>AI-Powered Systems</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>

          <div className={`${styles.floatingTag} ${styles.tag3}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <span>Global Scaling</span>
          </div>

          <div className={`${styles.floatingTag} ${styles.tag4}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            <span>Full-Stack Dev</span>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <span className={styles.statNumber}>35K+</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
            <p className={styles.statSub}>Global Community</p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <span className={styles.statNumber}>Global</span>
              <span className={styles.statLabel}>Reach</span>
            </div>
            <p className={styles.statSub}>Serving Worldwide</p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Expert Techs</span>
            </div>
            <p className={styles.statSub}>Scalable Team</p>
          </div>
        </div>

      </div>
    </section>
  );
}
