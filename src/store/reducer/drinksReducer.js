import { EVENTS, COMMENTS, ADDNEWEVENT, ADDCOMMENT } from '../actions/action-types/drinks-actions'

const initState = {
    apiEvents: [],
    apiComments: []
}

const drinksReducer = (state = initState,action) => {
    // store the events  of the database to state apiEvents
    if(action.type === EVENTS){
      return{
        ...state,
        apiEvents: action.obj
      }
    }

    // store the comments of the database to state apiComments
    if (action.type === COMMENTS) {
      return {
        ...state,
        apiComments: action.obj
      }
    }
    
    // store the new event to state apiEvents
    if(action.type === ADDNEWEVENT){
      return{
        ...state,
        apiEvents: [...state.apiEvents, action.obj]
      }
    }

    // store the new event to state apiComments
    if(action.type === ADDCOMMENT){
      return{
        ...state,
        apiComments: [...state.apiComments, action.obj]
      }
    }
  
    return state
      
  }
  
  export default drinksReducer