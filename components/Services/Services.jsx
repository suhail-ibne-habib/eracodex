"use client";
import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './Services.module.css';

// Ensure plugins are registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const services = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Creating high-conversion interfaces for SaaS and FinTech platforms. We focus on intuitive user journeys, interactive prototypes, and premium aesthetics that turn visitors into loyal users.',
    images: [
      { src: '/images/web design/photo_2026-05-08_15-04-38.jpg', alt: 'Premium UI/UX Design for SaaS and FinTech applications', className: styles.mainImage },
      { src: '/images/web design/photo_2026-05-08_15-05-00.jpg', alt: 'Conversion-optimized mobile app interface design', className: styles.secondaryImage }
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Engineering scalable full-stack applications and high-performance websites. From custom SaaS architectures to complex FinTech systems, we build with security and speed at the core.',
    images: [
      { src: '/images/web dev/photo_2026-05-08_15-04-56.jpg', alt: 'Scalable full-stack development for enterprise SaaS platforms', className: styles.mainImage },
      { src: '/images/web dev/photo_2026-05-08_15-13-58.jpg', alt: 'High-performance web architecture and backend systems', className: styles.secondaryImage }
    ]
  },
  {
    id: 'automation',
    title: 'Automation & Workflows',
    description: 'Streamline your operations with AI-driven automation. We integrate custom API workflows and n8n systems to eliminate manual tasks and optimize your business logic for maximum efficiency.',
    images: [
      { src: '/images/webflow_main.png', alt: 'AI-driven automated workflow optimization and API integrations', className: styles.mainImage },
      { src: '/images/webflow_secondary.png', alt: 'Custom business logic automation and operations scaling', className: styles.secondaryImage }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Strategy',
    description: 'Build authority and drive growth with data-driven social strategies. We handle everything from content planning to community management, positioning your brand as a leader in your industry.',
    images: [
      { src: '/images/mobile_mockup.png', alt: 'Strategic social media content planning and brand authority growth', className: styles.mainImage },
      { src: '/images/laptop_mockup.png', alt: 'Data-driven social media growth and community management', className: styles.secondaryImage }
    ]
  },
  {
    id: 'branding',
    title: 'Logo & Branding',
    description: 'Building iconic identities for tech-forward brands. We craft visual systems, brand voices, and comprehensive guidelines that ensure your business stands out in the global market.',
    images: [
      { src: '/images/branding_main.png', alt: 'Iconic logo design and tech-forward visual brand identity', className: styles.mainImage },
      { src: '/images/branding_secondary.png', alt: 'Comprehensive branding guidelines and global brand voice', className: styles.secondaryImage }
    ]
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const textRefs = useRef([]);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      // 1. Responsive Split Screen Pinning (Pin Left Text, Scroll Right Images)
      ScrollTrigger.create({
        trigger: leftColumnRef.current,
        start: "top 25%", // Pin the left column when it reaches 25% from the top
        endTrigger: rightColumnRef.current,
        end: "bottom bottom", // Unpin when the bottom of the scrolling images reaches bottom
        pin: true,
        pinSpacing: false,
      });

      const rightSections = gsap.utils.toArray(`.${styles.imageSection}`);

      // Set initial state for absolute text blocks
      textRefs.current.forEach((block, idx) => {
        if (idx !== 0) {
          // Hide subsequent blocks: transparent and pushed down
          gsap.set(block, { opacity: 0, yPercent: -50, y: "30vh" });
        } else {
          // Show first block: visible and centered
          gsap.set(block, { opacity: 1, yPercent: -50, y: "0vh" });
        }
      });

      // 2. Cross-fade and slide text as overlapping images scroll past
      rightSections.forEach((section, i) => {
        if (i === 0) return;

        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%", // Start earlier for smoother transition
            end: "top 30%",   // End later
            scrub: 1,         // Smooth scrub
          }
        })
          .to(textRefs.current[i - 1], { y: "-30vh", opacity: 0 }, 0)
          .fromTo(textRefs.current[i],
            { y: "30vh", opacity: 0 },
            { y: "0vh", opacity: 1 },
            0
          );
      });
    });

    mm.add("(max-width: 900px)", () => {
      // Mobile cleanup
      textRefs.current.forEach(block => {
        gsap.set(block, { opacity: 1, yPercent: 0, clearProps: "all" });
      });
    });

  }, { scope: containerRef });

  return (
    <section className={styles.servicesSection} ref={containerRef} id="services">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>What We Do</div>
          <h2 className={styles.title}>
            We Build <span className={styles.serifItalic}>Systems</span> and <span className={styles.serifItalic}>Brands</span> That Drive Growth
          </h2>
        </div>

        <div className={styles.splitScreen}>

          {/* Left Column: Pinned Text */}
          <div className={styles.leftColumnWrapper}>
            <div className={styles.leftColumn} ref={leftColumnRef}>
              <div className={styles.textContent}>
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={styles.textBlock}
                    ref={el => textRefs.current[index] = el}
                  >
                    <h3 className={styles.cardTitle}>
                      {service.title.split(' ').map((word, i, arr) => (
                        i === arr.length - 1 ? <span key={i} className={styles.serifItalic}>{word}</span> : `${word} `
                      ))}
                    </h3>
                    <p className={styles.description}>{service.description}</p>

                    {/* Mobile-only images (keeps content together on small screens) */}
                    <div className={styles.mobileImages}>
                      <div className={styles.imageWrapper}>
                        {service.images.map((img, i) => (
                          <div key={i} className={img.className}>
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Natural Scrolling Images */}
          <div className={styles.rightColumn} ref={rightColumnRef}>
            {services.map((service) => (
              <div key={service.id} className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                  {service.images.map((img, i) => (
                    <div key={i} className={img.className}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
