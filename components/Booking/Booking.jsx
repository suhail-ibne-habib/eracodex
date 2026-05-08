"use client";
import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import styles from './Booking.module.css';

export default function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#A3FF47",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className={styles.bookingSection} id="book">
      {/* Background Glows */}
      <div className={styles.glowTop}></div>
      <div className={styles.glowBottom}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>WORK WITH US</span>
          <h2 className={styles.title}>
            Let's Level Up <br />
            <span className={styles.highlight}>Your Business!</span>
          </h2>
        </div>
        
        <div className={styles.embedWrapper}>
          <Cal
            calLink={process.env.NEXT_PUBLIC_CAL_LINK}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "dark" }}
          />
        </div>
      </div>
    </section>
  );
}
