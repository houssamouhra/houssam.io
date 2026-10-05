'use client';
import { useEffect } from 'react';
import NextTopLoader, { useTopLoader } from 'nextjs-toploader';

export const RELOAD_LOADING_BAR_ID = 'reload-loading-bar';
export const RELOAD_LOADING_BAR_STYLE_ID = 'reload-loading-bar-style';
export const RELOAD_PENDING_KEY = 'reload-loading-bar-pending';
export const LOADING_BAR_COLOR = '#1abc9c';

const LoadingBar = () => {
  const loader = useTopLoader();

  useEffect(() => {
    const markReloadPending = () => {
      try {
        sessionStorage.setItem(RELOAD_PENDING_KEY, '1');
      } catch {}
    };

    window.addEventListener('beforeunload', markReloadPending);

    try {
      if (sessionStorage.getItem(RELOAD_PENDING_KEY) !== '1') {
        return () => window.removeEventListener('beforeunload', markReloadPending);
      }

      sessionStorage.removeItem(RELOAD_PENDING_KEY);

      const bootstrapBar = document.getElementById(RELOAD_LOADING_BAR_ID);
      const bootstrapStyle = document.getElementById(RELOAD_LOADING_BAR_STYLE_ID);

      loader.start();

      const finish = () => {
        bootstrapBar?.remove();
        bootstrapStyle?.remove();
        loader.done(true);
      };

      if (document.readyState === 'complete') {
        requestAnimationFrame(() => setTimeout(finish, 90));
      } else {
        window.addEventListener('load', finish, { once: true });
      }

      return () => {
        window.removeEventListener('beforeunload', markReloadPending);
        window.removeEventListener('load', finish);
      };
    } catch {
      return () => window.removeEventListener('beforeunload', markReloadPending);
    }
  }, [loader]);

  return (
    <NextTopLoader
      color={LOADING_BAR_COLOR}
      height={3}
      showSpinner={false}
      crawl
      initialPosition={0.3}
      crawlSpeed={200}
      speed={200}
      easing='ease'
      shadow={`0 0 10px ${LOADING_BAR_COLOR}, 0 0 5px ${LOADING_BAR_COLOR}`}
    />
  );
};

export default LoadingBar;
