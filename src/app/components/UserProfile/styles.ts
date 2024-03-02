import { Avatar } from '@mui/material'
import EastIcon from '@mui/icons-material/East'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

export const UserAvatar = styled(Avatar)(() => ({
  height: '56px',
  width: '56px'
}))

export const ArrowIcon = styled(EastIcon)(() => ({
  fontSize: 14,
  marginLeft: 5,
  color: '#6A6180'
}))

export const ResultButton = styled(Link)(() => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',

  '&:hover p': {
    textDecoration: 'underline'
  }
}))
