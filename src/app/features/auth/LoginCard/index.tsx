import { Box, Typography } from '@mui/material'
import { FcGoogle } from 'react-icons/fc'
import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Button, Container } from './styles'
import { useLoginMutation } from '../../../services/auth'
import { login } from '../auth.slice'
import { jwtDecode } from 'jwt-decode'
import { enqueueSnackbar } from 'notistack'

export function LoginCard(): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loginUser] = useLoginMutation()

  const createSession = useGoogleLogin({
    onSuccess: async (response) => {
      fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`)
        .then((response) => {
          response.json()
            .then(async (data) => {
              const payload = {
                avatar: data.picture,
                name: data.name,
                email: data.email
              }

              const response = await loginUser({
                payload
              })

              // @ts-expect-error Pendente ajustar tipagens do retorno da API
              const { user } = jwtDecode(response.data.token)

              // @ts-expect-error Pendente ajustar tipagens do retorno da API
              dispatch(login({ jwtToken: response.data.token, user }))
            })
            .catch(() => {
              enqueueSnackbar('Erro ao fazer login', { variant: 'error' })
            })
        })
        .catch(() => {
          enqueueSnackbar('Erro ao fazer login', { variant: 'error' })
        })

      navigate('/')
    },
    onError: (response) => console.log(response.error)
  })

  return (
    <Container>
      <Typography variant="h1">Fazer login</Typography>
      <Typography mt={1.5}>É fácil e rápido</Typography>

      <Box mt="40px">
        <Button onClick={() => { createSession() }}>
          <FcGoogle fontSize="20px" />
          <Typography fontSize="14px">Login com Google</Typography>
        </Button>
      </Box>
    </Container>
  )
}
