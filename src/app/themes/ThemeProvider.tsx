import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { type ThemeProviderProps } from './ThemeProvider.interface'
import { theme } from './material-ui'

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
