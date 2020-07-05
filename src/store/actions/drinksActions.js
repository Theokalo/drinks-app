import { EVENTS, COMMENTS, ADDNEWEVENT, ADDCOMMENT } from './action-types/drinks-actions'

// events action
export const events = (obj) => {
  return {
    type: EVENTS,
    obj
  }
}

// comments action
export const comments = (obj) => {
  return {
    type: COMMENTS,
    obj
  }
}

// add new event action
export const addNewEvent = (obj) => {
  return {
    type: ADDNEWEVENT,
    obj
  }
}

// add new comment action
export const addComment = (obj) => {
  return {
    type: ADDCOMMENT,
    obj
  }
}