/** @type {import('tailwindcss').Config} */

/*
 * Premium Utilitarian Minimalism, applied over the client's locked teal identity.
 *
 * PRD Bab 5 binds the palette to teal green, so the protocol's warm monochrome
 * is used for the canvas and structure while teal remains the single accent.
 * Colour stays scarce: one accent, used only where it carries meaning.
 *
 * SHAPE SYSTEM (one rule, applied everywhere):
 *   surfaces and cards  -> 10px, 1px hairline border
 *   tags and filters    -> pill
 *   primary buttons     -> 6px
 * Nothing else. No drop shadows heavier than a 4% ambient lift.
 *
 * TYPOGRAPHY:
 *   display  -> Newsreader (editorial serif, hero only)
 *   sans     -> Plus Jakarta Sans (body, UI, everything else)
 *   mono     -> Geist Mono, for figures and metadata
 *
 * Z-INDEX (systemic layers only):
 *   0 content · 10 section decoration · 30 nav · 40 nav overlay · 50 drawer · 60 lightbox
 */

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Canvas: warm off-white, never pure white everywhere */
        canvas: '#F7F6F3',
        surface: '#FFFFFF',
        'surface-sunk': '#FBFBFA',

        /* Enhanced accent ramp inspired by sidebar reference */
        brand: {
          primary: '#1ED760',
          primaryInk: '#0E7A3E',
          deep: '#0A3D2A',
          secondary: '#16A34A',
          softBg: '#F0FDF4',
          textPrimary: '#0F172A',
          textSecondary: '#475569',
          line: '#E2E8F0',
        },

        /* Structural rules: ultra-light, never a heavy border */
        hair: '#E2E8F0',

        /* Muted pastels, for tags and inline metadata only */
        pastel: {
          greenBg: '#DCFCE7',
          greenInk: '#166534',
          blueBg: '#DBEAFE',
          blueInk: '#1E40AF',
          yellowBg: '#FEF3C7',
          yellowInk: '#92400E',
          redBg: '#FEE2E2',
          redInk: '#991B1B',
        },
      },

      fontFamily: {
        display: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', '"SF Mono"', 'monospace'],
      },

      fontSize: {
        /* Hero headline: more impactful scale */
        hero: ['3rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero-md': ['4rem', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'hero-lg': ['5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },

      borderRadius: {
        DEFAULT: '12px',
        none: '0',
        btn: '8px',
        chip: '999px',
      },

      boxShadow: {
        /* Enhanced shadows with more presence */
        none: '0 0 0 0 rgba(0, 0, 0, 0)',
        lift: '0 4px 16px rgba(0, 0, 0, 0.08)',
        drawer: '-24px 0 60px -20px rgba(10, 61, 42, 0.28)',
      },

      maxWidth: {
        prose: '65ch',
        shell: '80rem',
      },

      transitionTimingFunction: {
        /* The protocol's reveal curve, reused for hovers so timing stays uniform */
        reveal: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
