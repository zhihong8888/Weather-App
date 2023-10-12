import { TypographyOptions } from '@mui/material/styles/createTypography'

// Update the Typography's TypographyOptions
declare module '@mui/material/styles/createTypography' {
  interface FontStyle {
    tableContent: React.CSSProperties
    h5Light: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    tableContent: true
    h5Light: true
  }
}

export const typography: TypographyOptions = {
  fontFamily: "'Poppins', 'Roboto', sans-serif",
  h1: { fontWeight: '600', fontSize: 48 },
  h2: { fontWeight: '600', fontSize: 40 },
  h3: { fontWeight: '600', fontSize: 30 },
  h4: { fontWeight: '600', fontSize: 24 },
  h5: { fontWeight: '600', fontSize: 20 },
  h5Light: { fontWeight: '500', fontSize: 20, display: 'block' },
  h6: { fontWeight: '600', fontSize: 16 },
  subtitle1: { fontWeight: '500', fontSize: 16 },
  subtitle2: { fontWeight: '500', fontSize: 14 },
  body1: { fontWeight: '400', fontSize: 16,  },
  body2: { fontWeight: '400', fontSize: 14 },
  button: {
    textTransform: 'none',
  },
  caption: { fontWeight: '500', fontSize: 12 },
  overline: { fontWeight: '600', fontSize: 12 },
  tableContent: { fontWeight: '700', fontSize: 15 },
}
