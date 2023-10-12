import { PaletteOptions, TypeText, createTheme, responsiveFontSizes } from '@mui/material'
import { commonColours } from './commonColors'
import { typography } from './typograpy'

// Create a theme instance.
const darkTheme = () => {
  return responsiveFontSizes(
    createTheme({
      palette: darkColors,
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
      typography: typography,
      components: {},
    })
  )
}

export const darkColors: PaletteOptions = {
  components:{
    searchField: '#32235C',
    searchIcon: '#2B2443',
  },
  text: {
    primary: '#FCFAF9',
    secondary: '#D8CCF2',
  },
  primary: {
    main: '#3E2E6D',
    dark: '#2B2443',
    light: '#4D3490',
  },
  secondary: {
    main: '#FFFFFF',
  },
  info: {
    main: '#656565',
  },
  error: {
    main: '#FFFFFF',
  },
  success: {
    main: '#FFFFFF',
  },
  warning: {
    main: '#FFFFFF',
  },
  background: {
    default: '#FFFFFF',
  },
  divider: '#FFFFFF',
  ...commonColours,
}

declare module '@mui/material/styles' {
  interface Palette {
    components: {
      searchField: string
      searchIcon: string
    }
    yellow: {
      [key: number]: string
    }
    amber: {
      [key: number]: string
    }
    orange: {
      [key: number]: string
    }
    indigo: {
      [key: number]: string
    }
    deepPurple: {
      [key: number]: string
    }
    blue: {
      [key: number]: string
    }
    green: {
      [key: number]: string
    }
    red: {
      [key: number]: string
    }
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    components: {
      searchField: string
      searchIcon: string
    }
    yellow: {
      [key: number]: string
    }
    amber: {
      [key: number]: string
    }
    orange: {
      [key: number]: string
    }
    indigo: {
      [key: number]: string
    }
    deepPurple: {
      [key: number]: string
    }
    blue: {
      [key: number]: string
    }
    green: {
      [key: number]: string
    }
    red: {
      [key: number]: string
    }
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
  }
}

export default darkTheme
