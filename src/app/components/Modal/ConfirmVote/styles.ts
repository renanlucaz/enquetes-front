import { Button, ButtonBase, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Paper)(() => ({
  width: '100%',
  maxWidth: '375px',
  margin: 'auto',
  borderRadius: '8px',
  boxShadow: 'none',
  position: 'relative'
}))

export const CloseButton = styled(ButtonBase)(() => ({
  fontSize: '26px',
  color: '#9e9e9e',
  position: 'absolute',
  top: '20px',
  right: '20px'
}))

export const ExitButton = styled(Button)(() => ({
  marginTop: '6px',

  '&:hover': {
    backgroundColor: '#d9d9d9'
  }
}))
