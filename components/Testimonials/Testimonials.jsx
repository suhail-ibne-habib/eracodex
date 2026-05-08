import styles from './Testimonials.module.css';
import Image from 'next/image';

const baseTestimonials1 = [
  { id: 1, name: 'John Hogue', subs: 'Founder @ Hogue Tech', text: "I highly recommend Eracodex's services. I've had a great experience so far. They have created many assets for my business, and they have all been of extremely high quality.", avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop' },
  { id: 2, name: 'Horis', subs: '186K Subscribers', text: "I've been working with Eracodex to create assets for my projects. I needed something vibrant and bright to easily catch the viewer's eye, and they delivered exactly as promised within 24 hours.", avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop' },
  { id: 3, name: 'Sara Finance', subs: '663K Subscribers', text: "Eracodex is truly amazing! The design turned out perfect-I absolutely love it! Thank you so much for your incredible work. I'm really excited to continue working together long-term.", avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop' },
  { id: 4, name: 'Mark Dawson', subs: 'CEO, Dawson Digital', text: "I would highly recommend working with them. High quality results and they are always open to any changes I suggest. Excellent communication.", avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop' },
];

const baseTestimonials2 = [
  { id: 5, name: 'Hayden Bunch', subs: 'COO, Global Logic', text: "The real deal! Amazing visuals and really nice guys too! Highly recommend! Thank you again for the amazing work you do for me.", avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&h=150&auto=format&fit=crop' },
  { id: 6, name: 'Jthomo', subs: 'Tech Creator', text: "Oh my goodness dude this design is way better than I expected you've done a really good job bro.", avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&h=150&auto=format&fit=crop' },
  { id: 7, name: 'Football Hub', subs: '8.77K Subscribers', text: "My experience was phenomenal. The design aesthetic is top tier and they know exactly how to make content pop.", avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop' },
  { id: 8, name: 'Elena Ray', subs: 'Creative Director', text: "Consistent, fast, and incredibly high quality. These guys know what they're doing when it comes to visual identity.", avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop' },
];

// Duplicate the arrays to ensure the marquee is wide enough for ultra-wide monitors
const testimonials1 = [...baseTestimonials1, ...baseTestimonials1.map(t => ({ ...t, id: t.id + 10 }))];
const testimonials2 = [...baseTestimonials2, ...baseTestimonials2.map(t => ({ ...t, id: t.id + 10 }))];

const StarRating = () => (
  <div className={styles.stars}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ data }) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <div className={styles.avatarWrapper}>
        <Image src={data.avatar} alt={data.name} width={40} height={40} className={styles.avatar} sizes="40px" />
      </div>
      <div className={styles.userInfo}>
        <h4 className={styles.userName}>{data.name}</h4>
        <p className={styles.userSubs}>{data.subs}</p>
      </div>
      <StarRating />
    </div>
    <div className={styles.cardBody}>
      <p>"{data.text}"</p>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.header}>
        <span className={styles.badge}>TESTIMONIALS</span>
        <h2 className={styles.title}>Loved by Creators</h2>
        <p className={styles.subtitle}>Here's what creators worldwide have to say about us</p>
      </div>

      <div className={styles.marqueeContainer}>
        {/* Row 1 - moves left */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeContent}>
            {testimonials1.map((t) => <TestimonialCard key={t.id} data={t} />)}
          </div>
          {/* Duplicate for infinite effect */}
          <div className={styles.marqueeContent} aria-hidden="true">
            {testimonials1.map((t) => <TestimonialCard key={`dup-${t.id}`} data={t} />)}
          </div>
        </div>

        {/* Row 2 - moves right */}
        <div className={styles.marqueeRow}>
          <div className={`${styles.marqueeContent} ${styles.reverse}`}>
            {testimonials2.map((t) => <TestimonialCard key={t.id} data={t} />)}
          </div>
          {/* Duplicate for infinite effect */}
          <div className={`${styles.marqueeContent} ${styles.reverse}`} aria-hidden="true">
            {testimonials2.map((t) => <TestimonialCard key={`dup-${t.id}`} data={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
