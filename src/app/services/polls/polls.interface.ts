export interface PollOptions {
  id: string
  title: string
  score: number
}

export interface User {
  avatar: string
  name: string
  id: string
  email: string
}

export interface Vote {
  id: string
  pollOption: {
    id: string
    title: string
  }
  createdById: string
}

export interface Poll {
  id: string
  title: string
  created_at: string
  updated_at: string
  options: PollOptions[]
  user: User
  votes: Vote[]
}
