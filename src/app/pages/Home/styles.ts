import { Box, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Header = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: 'relative'
}))

export const HeaderContent = styled(Box)(() => ({
  width: '100%',
  maxWidth: '750px',
  margin: 'auto',
  padding: '40px 10px',

  '@media(max-width: 720px)': {
    paddingTop: 70
  }
}))

export const CreateButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#fff',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  textTransform: 'initial',
  width: '270px',
  height: '65px',
  fontSize: '18px',

  '&:hover': {
    backgroundColor: '#fff'
  }
}))

export const Content = styled(Box)(() => ({
  width: '100%',
  maxWidth: '750px',
  margin: 'auto',
  padding: '40px 10px'
}))
