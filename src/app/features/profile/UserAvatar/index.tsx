import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '@mui/icons-material'
import { type RootState } from '../../../store'
import { Avatar, Box, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material'

import { Container, Photo } from './styles'
import { logout } from '../../../features/auth/auth.slice'

export function UserAvatar(): JSX.Element {
  const dispatch = useDispatch()
  const userData = useSelector((state: RootState) => state.auth.user)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <>
      <Container disableRipple onClick={handleClick}>
        <Photo src={userData?.avatar} />
      </Container>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box display="flex" alignItems="center" padding="10px 15px">
          <Avatar src={userData?.avatar} /> {userData?.name}
        </Box>
        <Divider />
        <MenuItem onClick={() => { dispatch(logout()) }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </>
  )
}
