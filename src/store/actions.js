import axios from 'axios'
export const getUsers = ({ commit }) => {
  axios.get('https://api.github.com/users')
    .then(response => {
      commit('SET_USERS', response.data)
    })
}
export const getFollowers = ({ commit }, name) => {
  axios.get(`https://api.github.com/users/${name}/followers`)
    .then(response => {
      commit('SET_FOLLOWERS', response.data)
    })
}
export const getFollowing = ({ commit }, name) => {
  axios.get(`https://api.github.com/users/${name}/following`)
    .then(response => {
      commit('SET_FOLLOWING', response.data)
    })
}
export const getProfile = ({ commit }, name) => {
  axios.get(`https://api.github.com/users/${name}`)
    .then(response => {
      commit('SET_PROFILE', response.data)
    })
}
