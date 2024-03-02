import { useMemo, useState } from 'react'
import { enqueueSnackbar } from 'notistack'
import { Box, FormControlLabel, RadioGroup, Typography } from '@mui/material'

import { UserProfile } from '../UserProfile'
import { Container, Footer, Option } from './styles'
import { ConfirmVote } from '../Modal/ConfirmVote'
import { type PollCardProps } from './PollCard.interface'
import { type User, useVoteOnPollMutation } from '../../services/polls'
import { useSelector } from 'react-redux'

import { type RootState } from '../../store'

export function PollCard(props: PollCardProps): JSX.Element {
  const { data: { options, title, id, user, votes } } = props
  const userData = useSelector((state: RootState) => state.auth.user as User)

  const [pollOptionId, setPollOptionId] = useState('')
  const [confirmVoteModalOpen, setConfirmVoteModalOpen] = useState(false)
  const [voteOnPoll] = useVoteOnPollMutation()

  const userAlreadyVotted = Boolean(useMemo(() => {
    return votes.find(vote => vote.createdById === userData.id)
  }, [votes]))

  const openConfirmVoteModal = (): void => {
    setConfirmVoteModalOpen(true)
  }

  const closeConfirmVoteModal = (): void => {
    setConfirmVoteModalOpen(false)
  }

  const onSubmit = async () => {
    await voteOnPoll({ pollId: id, pollOptionId, createdById: userData.id })
      .unwrap()
      .then(() => {
        enqueueSnackbar('Voto confirmado com sucesso!', { variant: 'success' })
        closeConfirmVoteModal()
      })
      .catch(() => {
        enqueueSnackbar('Ocorreu um erro ao confirmar o voto', { variant: 'error' })
      })
  }

  return (
    <Container>
      <Box p='30px'>
        <UserProfile pollId={id} user={user} />
        <Typography variant="h2" mt="14px" color={userAlreadyVotted ? '#919191' : '#454545'}>{title}</Typography>
        <Box pl="8px" mt="10px">
          <RadioGroup
            defaultValue="female"
          >
            {options.map(option => (
              <FormControlLabel
                key={option.id}
                checked={userAlreadyVotted
                  ? Boolean(votes.find(vote => vote.pollOption.id === option.id && vote.createdById === userData.id))
                  : option.id === pollOptionId
                }
                disabled={userAlreadyVotted}
                control={<Option size="small" />}
                label={<Typography variant="body2">{option.title}</Typography> }
                onChange={() => { setPollOptionId(option.id) }}
              />
            ))}
          </RadioGroup>
        </Box>
      </Box>
      <Footer onClick={openConfirmVoteModal} disabled={userAlreadyVotted}>
        <Typography
          fontWeight="bold"
          color={userAlreadyVotted ? '#465564' : 'primary'}>
          {userAlreadyVotted ? 'Voto confirmado!' : 'Confirmar voto'}
        </Typography>
      </Footer>
      <ConfirmVote onSubmit={onSubmit} isOpen={confirmVoteModalOpen} closeModal={closeConfirmVoteModal} />
    </Container>
  )
}
