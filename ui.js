/* Reading progress for the long read. Exposes --read (0 to 1) on <html>;
   styles.css draws the thin bar under the sticky section bar. */
(() => {
  if (!document.querySelector('.story-hero')) return;
  const root = document.documentElement;
  let queued = false;
  const update = () => {
    queued = false;
    const max = root.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    root.style.setProperty('--read', progress.toFixed(4));
  };
  const schedule = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  update();
})();
