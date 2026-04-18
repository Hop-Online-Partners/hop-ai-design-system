/**
 * Hop AI Design System — Tailwind Preset
 *
 * Usage in consuming projects:
 *
 *   const hopAI = require('@hop-ai/design-system/tokens/tailwind.config');
 *   module.exports = {
 *     presets: [hopAI],
 *     content: ['./src/**\/*.{html,jsx,tsx}'],
 *   };
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        // Brand accents
        primary: '#FE3D3E',
        secondary: '#7D3EFE',
        fresh: '#97EAD2',

        // Neutrals
        ink: '#282A3E',      // Dark navy — text, dark backgrounds
        muted: '#6B7280',    // Secondary text
        surface: '#FFFFFF',
        elevated: '#F9FAFB',
        border: '#E5E7EB',

        // Tinted section backgrounds
        tint: {
          neutral: '#F4F4F5',
          warm: '#FFF5F5',
          cool: '#F8F5FF',
          fresh: '#FAFEFD',
        },

        // Data viz (ordered)
        viz: {
          1: '#FE3D3E',
          2: '#7D3EFE',
          3: '#97EAD2',
          4: '#282A3E',
          5: '#6B7280',
          6: '#E5E7EB',
        },
      },
      fontFamily: {
        heading: ['"Work Sans"', 'Arial', 'Helvetica', 'sans-serif'],
        body: ['"Inter"', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        h1: ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '800' }],
        h2: ['3rem',    { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        h3: ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      borderRadius: {
        sm: '5px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        md: '0 4px 8px rgba(0,0,0,0.08)',
        lg: '0 8px 24px rgba(0,0,0,0.10)',
        xl: '0 16px 48px rgba(0,0,0,0.12)',
      },
      spacing: {
        // Aligns with CSS token spacing scale
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #FE3D3E 0%, #7D3EFE 100%)',
      },
      maxWidth: {
        content: '1200px',
        narrow: '720px',
      },
    },
  },
  plugins: [],
};
