'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Always reset rendering on route change
    setShouldRender(false);
    const timeout = setTimeout(() => {
      setShouldRender(true);
    }, 50); // Keep delay minimal, just enough to hide pre-render flash

    return () => clearTimeout(timeout);
  }, [pathname]);

  // Don't render anything at all until ready
  if (!shouldRender) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}