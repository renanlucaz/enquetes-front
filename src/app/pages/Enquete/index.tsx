import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Divider, Skeleton, Tab, Tabs, Typography } from '@mui/material'
import useWebSocket from 'react-use-websocket'

import { Content, Header } from './styles'
import { UserAvatar } from '../../features/profile/UserAvatar'
import { BarChart } from '../../components/Charts/BarChart'
import { LineChart } from '../../components/Charts/LineChart'
import { useGetPollDetailsQuery } from '../../services/polls'

export function Enquete(): JSX.Element {
  const { pollId } = useParams()
  const [tab, setTab] = useState('column')
  const { data, refetch } = useGetPollDetailsQuery({ pollId: pollId ?? '' }, { skip: !pollId })

  useWebSocket(`${process.env.REACT_APP_WEBSOCKETS_URL}/polls/${pollId}/results`, {
    onMessage: async () => {
      await refetch()
    }
  })

  return (
    <Box>
      <Header>
        <Box>
          <UserAvatar />
          {!data
            ? (
              <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                <Skeleton animation="wave" height={45} width={700}/>
                <Skeleton animation="wave" height={32} width={200}/>
              </Box>)
            : (
              <>
                <Typography variant="h1" color="#fff">{data?.poll?.title}</Typography>
                <Box display="flex" alignItems="center" justifyContent="center" mt="12px" textAlign="center">
                  <Typography fontSize="14px" color="#cde7f1" mt="2px">Por {data?.poll?.user?.name}</Typography>
                </Box>
              </>)}
        </Box>
      </Header>
      <Content>
        <Typography fontWeight="bold" fontSize="26px">Resultados</Typography>
        <Tabs
          value={tab}
          textColor="primary"
          indicatorColor="primary"
          aria-label="primary tabs example"
        >
          <Tab value="column" label="Por coluna" onClick={() => setTab('column')}/>
          <Tab value="line" label="Por linhas" onClick={() => setTab('line')} />
        </Tabs>
        <Divider />
        {tab === 'column'
          ? (
            <>
              {!data
                ? (
                  <Skeleton height="200px" />)
                : (
                  <Box mt="15px">
                    <BarChart data={data?.poll?.options ?? []} />
                  </Box>)}
            </>)
          : (
            <>
              {!data
                ? (
                  <Skeleton height="200px" />)
                : (
                  <Box mt="15px">
                    <LineChart data={data?.poll?.options ?? []} />
                  </Box>)}
            </>)}
      </Content>
    </Box>
  )
}
