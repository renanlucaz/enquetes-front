import { Avatar, Box, ButtonBase } from '@mui/material'
import { styled } from '@mui/material/styles'
import EastIcon from '@mui/icons-material/East'

export const Header = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  padding: '30px'
}))

export const Content = styled(Box)(() => ({
  width: '100%',
  maxWidth: '700px',
  margin: 'auto',
  marginTop: '30px'
}))

export const AvatarPhoto = styled(Avatar)(() => ({
  height: '40px',
  width: '40px'
}))

export const ArrowIcon = styled(EastIcon)(() => ({
  fontSize: 14,
  marginLeft: 5,
  color: '#6A6180'
}))

export const ResultButton = styled(ButtonBase)(() => ({
  '&:hover p': {
    textDecoration: 'underline'
  }
}))
