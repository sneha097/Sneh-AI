// src/app/layout.jsx

import './globals.css';
import Navbar from '../components/Navbar';
import ThemeRegistry from '../components/ThemeRegistry';
import { Toaster } from 'sonner';
import Footer from '../sections/Footer';

export const metadata = {
  title: 'Sneha Portfolio',
  description: 'Crafted with care by Sneha 💛',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground transition-colors duration-200">
        {/* Toast Notifications */}
        <Toaster position="top-right" richColors />

        {/* Theme Wrapper */}
        <ThemeRegistry>
          <Navbar />

          <main className="pt-16">
            {children}
          </main>

          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
