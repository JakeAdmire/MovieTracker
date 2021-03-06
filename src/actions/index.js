export const toggleFavorited = (id) => ({
  type: 'TOGGLE_FAVORITED',
  id
})

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
})

export const toggleInfo = (id) => ({
  type: 'TOGGLE_INFO',
  id
})

export const addFilms = (films) => ({
  type: 'ADD_FILMS',
  films
})

export const loginUser = (id, name) => ({
  type: 'LOGIN_USER',
  id,
  name
})
