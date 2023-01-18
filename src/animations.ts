window.addEventListener('DOMContentLoaded', (event) => {
  // Split text into spans
  const typeSplit = new SplitType('[text-split]', {
    types: 'words, chars',
    tagName: 'span',
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top bottom',
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      },
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 60%',
      onEnter: () => timeline.play(),
    });
  }

  $('[words-slide-from-right]').each(function (index) {
    const tl = gsap.timeline({ paused: true });
    tl.from($(this).find('.word'), {
      opacity: 0,
      x: '1em',
      duration: 0.6,
      ease: 'power2.out',
      stagger: { amount: 0.2 },
    });
    createScrollTrigger($(this), tl);
  });

  // Avoid flash of unstyled content
  gsap.set('[text-split]', { opacity: 1 });
});
