'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  text_primary: '#ffffff',
  text_secondary: '#aaaaaa',
  text: '#cccccc',
  card: '#1e1e1e',
};

export default function ThemeRegistry({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
