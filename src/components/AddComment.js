import React, {useState, useReducer} from 'react'
import { useDispatch } from 'react-redux'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Axios from 'axios'

const AddComment = props => {
    const [isActive, setIsActive] = useState(false)
    const [msg, setMsg] = useState('')
    const [msgColor, setMsgColor] = useState()
    const dispatch = useDispatch()
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            name: '',
            message: ''
        }
      );
    // handle input values
    const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setUserInput({[name]: newValue});
    }
    // handle if modal is open or not
    const handleModal = () => {
        setIsActive(!isActive)
    }
    // send post request to database and also set new comment to redux store
    const addRequest = () =>{
        const commentObj = {events_id:props.event_id, user_com_avatarUrl: 'https://i.stack.imgur.com/l60Hf.png',user_com_name:userInput.name, comment:userInput.message, time:new Date()}
        Axios.post('http://localhost:8081/comments/newComment/',commentObj)
        .then(response =>{
            console.log(response)
            if(response.status === 200) {
                const setAddComment = () => (
                    { type: "ADDCOMMENT", obj: commentObj }
                    );
                dispatch(setAddComment())
                setMsg('Event added Succesfully!!!')
                setMsgColor(true)
                setUserInput({
                    name: '',
                    message: ''
                })
            } else {
                setMsg('Event did not add Succesfully.')
                setMsgColor(false)
            }
        })
        .catch(error =>{
            console.log(error.response)
        })
        
    }
    return (
        <>
            <button onClick={()=>{handleModal()}} type="button" className="btn btn-dark">New Comment</button>
            <Modal open={isActive} onClose={()=>{handleModal()}} center>
                <div>
                <h2>Add New Comment</h2>
                <p>{msgColor ? <span style={{color:"#008000"}}>{msg}</span>: <span style={{color:"#FF0000"}}>{msg}</span>}</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleName">Name</label>
                        <input type="text" className="form-control" name="name" value={userInput.name} onChange={(e)=>{handleChange(e)}} aria-describedby="name" placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleMessage">Message</label>
                        <textarea className="form-control" name="message" value={userInput.message} onChange={(e)=>{handleChange(e)}} aria-describedby="name" placeholder="Comment..."></textarea>
                    </div>
                    <input type="button" className="btn btn-primary" value="Submit" onClick={addRequest}></input>
                </form>
                </div>
            </Modal>
        </>
    )
}

export default AddComment;