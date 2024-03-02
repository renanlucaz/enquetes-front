export interface ProfileRequest {
  jwtToken: string
}

export interface ProfileResponse {
  name: string
  email: string
  picture: string
}
