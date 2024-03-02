import { Box, Button, ButtonBase, Paper } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import { styled } from '@mui/material/styles'

export const Container = styled(Paper)(() => ({
  width: '100%',
  maxWidth: '535px',
  margin: 'auto',
  borderRadius: '8px',
  boxShadow: 'none',
  position: 'relative'
}))

export const Add = styled(AddIcon)(() => ({
  color: '#fff'
}))

export const CloseButton = styled(ButtonBase)(({ theme }) => ({
  fontSize: '26px',
  color: '#9e9e9e',
  position: 'absolute',
  top: '20px',
  right: '20px'
}))

export const AddButton = styled(Button)(() => ({
  width: '55px',
  minWidth: '55px',
  height: '55px',
  marginLeft: '10px',
  padding: '0'
}))

export const Bullet = styled(Box)(({ theme }) => ({
  width: '5px',
  height: '5px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main
}))

export const Footer = styled(Box)(() => ({
  backgroundColor: '#FAFAFC',
  borderTop: '1px solid #E6E6F0',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
  padding: '15px 35px',
  display: 'flex',
  justifyContent: 'space-between'
}))

export const Alert = styled(PriorityHighIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginLeft: '-8px'
}))

export const OptionList = styled(Box)(() => ({
  '& p': {
    '&:hover': {
      textDecoration: 'underLine'
    }
  }
}))
