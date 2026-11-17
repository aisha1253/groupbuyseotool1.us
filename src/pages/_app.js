import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { animationCreate } from '../../utils/utils';
import { FaAngleUp } from 'react-icons/fa';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const DynamicScrollToTop = dynamic(() => import('react-scroll-to-top'), {
  ssr: false,
});

const REVEAL_SELECTOR = [
  '.gb-section__head',
  '.gb-feature',
  '.gb-price',
  '.gb-step',
  '.gb-why',
  '.gb-showcase__card',
  '.gb-faq__item',
  '.gb-table-wrap',
  '.gb-contact-cta__box',
  '.gb-bigdata__inner',
  '.gb-empower',
  '.gb-prose',
  '.gb-note',
].join(',');

function initRevealAnimations() {
  if (typeof window === 'undefined') return () => {};

  const nodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
  nodes.forEach((el, index) => {
    if (!el.classList.contains('is-in')) {
      el.classList.add('gb-reveal');
      el.classList.add(`gb-reveal-delay-${(index % 5) + 1}`);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  nodes.forEach((el) => {
    if (!el.classList.contains('is-in')) observer.observe(el);
  });

  return () => observer.disconnect();
}

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  useEffect(() => {
    if (!mounted) return undefined;

    let cleanup = () => {};
    const run = () => {
      cleanup();
      cleanup = initRevealAnimations();
    };

    const start = setTimeout(run, 150);
    router.events.on('routeChangeComplete', run);

    return () => {
      clearTimeout(start);
      cleanup();
      router.events.off('routeChangeComplete', run);
    };
  }, [mounted, router.events, router.asPath]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head />
      <div className="page-wrapper">
        <Component {...pageProps} />
      </div>
      <DynamicScrollToTop className="scroll-to-top" smooth component={<FaAngleUp />} />
    </>
  );
}

export default MyApp;
