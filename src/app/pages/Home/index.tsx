import { Box, Typography } from '@mui/material'
import { Header, HeaderContent, CreateButton, Content } from './styles'
import { PollCard } from '../../components/PollCard'
import { CreatePoll } from '../../components/Modal/CreatePoll'
import { useState } from 'react'
import { UserAvatar } from '../../features/profile/UserAvatar'
import { useGetPollsListQuery } from '../../services/polls'
import { PollCardSkeleton } from '../../components/PollCard/PollCardSkeleton'

function Home(): JSX.Element {
  const [createPollModalOpen, setCreatePollModalOpen] = useState(false)
  const { data: pollList } = useGetPollsListQuery('')

  const openVoteModal = (): void => {
    setCreatePollModalOpen(true)
  }

  const closeVoteModal = (): void => {
    setCreatePollModalOpen(false)
  }

  return (
    <>
      <Box>
        <Header>
          <HeaderContent>
            <UserAvatar />
            <Box maxWidth="350px">
              <Typography variant="h1" color="#fff">
                Visualize, vote e crie enquetes.
              </Typography>
              <Typography variant="body1" color="#cde7f1" my="30px">
                É fácil e rápido! Basta clicar no botão abaixo para criar uma enquete.
              </Typography>
              <CreateButton onClick={openVoteModal} variant="contained">Nova enquete</CreateButton>
            </Box>
          </HeaderContent>
        </Header>
        <Content>
          {!pollList
            ? (
              <>
                <PollCardSkeleton />
              </>)
            : (
              <>
                {pollList.map(poll => (
                  <PollCard data={poll} key={poll.id} />
                ))}
              </>)}
        </Content>
      </Box>
      <CreatePoll isOpen={createPollModalOpen} closeModal={closeVoteModal} />
    </>
  )
}

export default Home
