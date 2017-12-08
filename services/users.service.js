import mainRequestService from './request.service'
export const login = () => {
  const url = 'http://localhost:8080/login'
  const options = {
    method: 'POST',
    body: '{username: "jacks", password: "d"}'
  }
  return mainRequestService(url, options)
}
export default {
  login
}
