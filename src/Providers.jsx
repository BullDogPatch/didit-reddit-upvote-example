'use client';

import { SessionProvider } from 'next-auth/react';

export function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default function ToastProvider({ children }) {
  return <>{children}</>;
}
