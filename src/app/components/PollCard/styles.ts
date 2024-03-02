import { ButtonBase, Paper, Radio } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Paper)(() => ({
  borderRadius: '8px',
  boxShadow: 'none',
  border: '1px solid #E6E6F0',
  marginBottom: '25px'
}))

export const Option = styled(Radio)(() => ({
  padding: '3px 2px',
  marginRight: '8px'
}))

export const Footer = styled(ButtonBase)(() => ({
  display: 'flex',
  flex: 1,
  width: '100%',
  justifyContent: 'center',
  borderTop: '1px solid #E6E6F0',
  padding: '25px',
  backgroundColor: '#FAFAFC',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px'
}))
