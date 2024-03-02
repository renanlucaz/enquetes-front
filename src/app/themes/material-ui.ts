import { type ThemeOptions, createTheme, tooltipClasses } from '@mui/material'
import { ptBR } from '@mui/material/locale'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#3d9abd',
      dark: '#307995',
      contrastText: '#fff'
    },
    background: {
      default: '#F0F0F7'
    }
  },
  typography: {
    fontFamily: [
      'Archivo'
    ].join(','),
    h1: {
      fontSize: '36px',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#454545'
    },
    body1: {
      fontSize: '16px'
    },
    body2: {
      fontSize: '14px',
      color: '#7B7B7B',
      fontWeight: 500
    }
  },
  components: {
    MuiTextField: {
      variants: [{
        props: { variant: 'outlined' },
        style: {
          borderRadius: '8px',
          border: '1px solid #E6E6F0',
          backgroundColor: '#FAFAFC',

          '& fieldset': {
            border: 'none'
          }
        }
      }]
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          borderRadius: '8px',
          padding: '10px 40px',

          '& p': {
            fontSize: '14px',
            fontWeight: '500',
            textTransform: 'initial'
          },

          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    },
    MuiTooltip: {
      defaultProps: {
        slotProps: {
          popper: {
            sx: {
              [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
              {
                marginTop: '0px'
              },
              [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
              {
                marginBottom: '0px'
              },
              [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
              {
                marginLeft: '0px'
              },
              [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
              {
                marginRight: '0px'
              }
            }
          }
        }
      }

    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    }
  }
}

export const theme = createTheme(themeOptions, ptBR)
