import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './ScrollableCards.module.css';

const cardData = [
  { id: 1, title: 'Card 1', content: 'This is card number 1.' },
  { id: 2, title: 'Card 2', content: 'This is card number 2.' },
  { id: 3, title: 'Card 3', content: 'This is card number 3.' },
  { id: 4, title: 'Card 4', content: 'This is card number 4.' },
  { id: 5, title: 'Card 5', content: 'This is card number 5.' },
  { id: 6, title: 'Card 6', content: 'This is card number 6.' },
];

const ScrollableCards = () => {
  const carouselRef = useRef();

  useEffect(() => {
    const carousel = carouselRef.current;
    const totalWidth = carousel.scrollWidth; // Full width for seamless looping
    const duration = 50; // Duration for scrolling

    // Animate carousel from left to right
    gsap.to(carousel, {
      x: -totalWidth, // Move left by total width of cards
      duration: duration,
      ease: 'none',
      repeat: -1, // Loop indefinitely
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`, // Seamless looping
      },
    });
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel} ref={carouselRef}>
        {cardData.map((card) => (
          <div key={card.id} className={styles.card}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
        {/* Duplicate cards for seamless loop */}
        {cardData.map((card) => (
          <div key={`duplicate-${card.id}`} className={styles.card}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableCards;
