import { Box, Skeleton } from '@mui/material'
import { Container } from './styles'

export function PollCardSkeleton(): JSX.Element {
  return (
    <Container>
      <Box p="35px">
        <Box>
          <Box display="flex" alignItems="center">
            <Skeleton variant="circular" width={54} height={54} />

            <Box marginLeft="10px" flex="1">
              <Skeleton animation="wave" height={15} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={15} width="80%" />
            </Box>
          </Box>
          <Skeleton animation="wave" height={120} width="60%" />
          <Skeleton animation="wave" height={40} width="60%" />
        </Box>
      </Box>
    </Container>
  )
}
