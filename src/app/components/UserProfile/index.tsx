import { Box, Typography } from '@mui/material'
import { ArrowIcon, ResultButton, UserAvatar } from './styles'
import { type UserProfileProps } from './UserProfile.interface'

export function UserProfile(props: UserProfileProps): JSX.Element {
  const { pollId, user } = props

  return (
    <Box display="flex" alignItems="center">
      <UserAvatar src={user?.avatar} />
      <Box ml="14px">
        <Typography fontSize="20px" fontWeight="bold" color="#32264D">{user?.name}</Typography>
        <ResultButton to={`/enquete/${pollId}`} target='_blank'>
          <Typography fontSize="15px" color="#6A6180" mt="4px">Ver estatísticas</Typography>
          <ArrowIcon />
        </ResultButton>
      </Box>
    </Box>
  )
}
