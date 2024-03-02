import { ButtonBase, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Paper)(() => ({
  padding: 40,
  borderRadius: '10px',
  boxShadow: 'none',
  width: '100%',
  maxWidth: '280px'
}))

export const Button = styled(ButtonBase)(() => ({
  borderRadius: '50px',
  padding: '10px 20px',
  width: '100%',
  border: '1px solid #898989',
  justifyContent: 'space-between',
  marginBottom: '10px'
}))
