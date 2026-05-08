import styles from './Comparison.module.css';

export default function Comparison() {
  return (
    <section className={styles.comparison}>
      <div className={styles.backgroundGlow} />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>WHY CHOOSE US</span>
          <h2 className={styles.title}>
            <span className={styles.titleGrey}>Know What</span><br/>
            <span className={styles.titleWhite}>We Do Differently</span>
          </h2>
        </div>

        <div className={styles.cardsWrapper}>
          
          {/* Left Card: Us */}
          <div className={`${styles.card} ${styles.ourCard}`}>
            <div className={styles.logoArea}>
              {/* Fake logo matching the style */}
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
              </div>
              <h3 className={styles.brandName}>ERACODEX</h3>
            </div>

            <ul className={styles.featureList}>
              <li>
                <CheckIcon />
                <span>In-house team of 50+ Tech Experts</span>
              </li>
              <li>
                <CheckIcon />
                <span>Scalable SaaS & FinTech Architectures</span>
              </li>
              <li>
                <CheckIcon />
                <span>Custom AI & API Workflow Automations</span>
              </li>
              <li>
                <CheckIcon />
                <span>35,000+ Followers & Global Trust</span>
              </li>
              <li>
                <CheckIcon />
                <span>Enterprise-grade Security & Speed</span>
              </li>
              <li>
                <CheckIcon />
                <span>Data-driven Conversion Strategies</span>
              </li>
              <li>
                <CheckIcon />
                <span>End-to-end Brand Identity Systems</span>
              </li>
              <li>
                <CheckIcon />
                <span>24/7 Global Support & Maintenance</span>
              </li>
            </ul>

            <div className={styles.bonusBox}>
              <p className={styles.bonusTitle}>Bonuses you get with us:</p>
              <ul className={styles.bonusList}>
                <li>
                  <BlueCheckIcon />
                  <span>Free Infrastructure Audit</span>
                </li>
                <li>
                  <BlueCheckIcon />
                  <span>Free 1-on-1 Strategy Consultancy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Card: Other Agencies */}
          <div className={`${styles.card} ${styles.theirCard}`}>
            <h3 className={styles.theirTitle}>Other Agencies</h3>
            
            <ul className={`${styles.featureList} ${styles.theirList}`}>
              <li>
                <CrossIcon />
                <span>Generic solutions with no technical depth</span>
              </li>
              <li>
                <CrossIcon />
                <span>Manual, fragmented systems that don't scale</span>
              </li>
              <li>
                <CrossIcon />
                <span>Security vulnerabilities & poor performance</span>
              </li>
              <li>
                <CrossIcon />
                <span>Zero AI integration or automation strategy</span>
              </li>
              <li>
                <CrossIcon />
                <span>Weak branding with no strategic foundation</span>
              </li>
              <li>
                <CrossIcon />
                <span>Guesswork instead of data-driven decisions</span>
              </li>
              <li>
                <CrossIcon />
                <span>Delayed responses and poor communication</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function BlueCheckIcon() {
  return (
    <svg className={styles.blueCheckIcon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="#2563eb" />
      <polyline points="8 12 11 15 16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className={styles.crossIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}
