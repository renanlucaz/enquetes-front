import { Avatar, ButtonBase } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(ButtonBase)(() => ({
  position: 'absolute',
  right: '33px',
  top: '9px'
}))

export const Photo = styled(Avatar)(() => ({
  height: '53px',
  width: '53px'
}))
