import { useState } from 'react'
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Modal,
  TextField,
  Tooltip,
  Typography
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { Add, AddButton, Alert, Bullet, CloseButton, Container, Footer, OptionList } from './styles'
import { type CreatePollProps } from './CreatePoll.interface'
import { useCreatePollMutation } from '../../../services/polls'
import { enqueueSnackbar } from 'notistack'

export function CreatePoll(props: CreatePollProps): JSX.Element {
  const { isOpen, closeModal } = props
  const [pollTitle, setPollTitle] = useState('')
  const [optionText, setOptionText] = useState('')
  const [optionsList, setOptionsList] = useState([] as string[])
  const [createPoll] = useCreatePollMutation()

  const handleSubmit = async () => {
    if (!pollTitle) {
      enqueueSnackbar('Preencha o título da enquete!', { variant: 'error' })
      return
    }

    if (optionsList.length < 2) {
      enqueueSnackbar('Crie ao menos duas opções!', { variant: 'error' })
      return
    }

    const body = {
      title: pollTitle,
      options: optionsList
    }

    createPoll({ body })
      .unwrap()
      .then(() => {
        setPollTitle('')
        setOptionText('')
        setOptionsList([])
        closeModal()
        enqueueSnackbar('Enquete criada com sucesso!', { variant: 'success' })
      })
      .catch(() => {
        enqueueSnackbar('Erro ao criar enquete.', { variant: 'error' })
      })
  }

  const addOption = (): void => {
    if (!optionText) return

    setOptionsList(prevState => [...prevState, optionText])
    setOptionText('')
  }

  const deleteOption = (optionIndex: number): void => {
    setOptionsList(prevState => prevState.filter((item, index) => index !== optionIndex))
  }

  return (
    <Modal sx={{ height: '100%', display: 'flex', alignItems: 'center' }} open={isOpen} onClose={closeModal}>
      <Container>
        <CloseButton disableRipple onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
        <Box p="40px 35px 20px">
          <Typography variant="h2">Dados da enquete</Typography>
          <Box my="16px">
            <Divider />
          </Box>
          <Box mt="20px">
            <Box>
              <Typography color="#9C98A6" fontSize="14px" mb="8px">Título</Typography>
              <TextField
                fullWidth
                variant="outlined"
                name="title" value={pollTitle}
                onChange={(event) => { setPollTitle(event.target.value) }}
              />
            </Box>
            <Box mt="18px">
              <Typography color="#9C98A6" fontSize="14px" mb="8px">Adicionar opção</Typography>
              <Box display="flex">
                <TextField
                  fullWidth
                  variant="outlined"
                  name="title"
                  value={optionText}
                  onChange={(event) => { setOptionText(event.target.value) }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      addOption()
                    }
                  }}
                />
                <AddButton variant="contained" onClick={addOption}>
                  <Add />
                </AddButton>
              </Box>
            </Box>
          </Box>
          <Box my="16px">
            <Divider />
          </Box>
          <Box>
            {optionsList.length === 0 && (
              <Typography mx="6px" color="#A0A0B2">Ainda não há itens na lista.</Typography>
            )}
            {optionsList.map((option, index) => (
              <OptionList key={index} display="flex" alignItems="center" mb="10px" >
                <Bullet />
                <Tooltip title="Deletar item da lista" placement="right-end">
                  <ButtonBase disableRipple onClick={() => { deleteOption(index) }} type="submit">
                    <Typography mx="6px" color="#A0A0B2">{option}</Typography>
                  </ButtonBase>
                </Tooltip>
              </OptionList>
            ))}
          </Box>
        </Box>
        <Box>
          <Footer>
            <Box display="flex" alignItems={'center'}>
              <Alert />
              <Typography ml="5px" fontSize="12px" color="#A0A0B2">Importante! <br/> Crie ao menos 2 opções</Typography>
            </Box>
            <Button variant='contained' onClick={handleSubmit}>
              <Typography>Criar enquete</Typography>
            </Button>
          </Footer>
        </Box>
      </Container>
    </Modal>
  )
}
