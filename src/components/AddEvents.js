import React, {useState, useReducer} from 'react'
import { useDispatch } from 'react-redux'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Axios from 'axios'

const AddEvent = () => {
    const [isActive, setIsActive] = useState(false)
    const dispatch = useDispatch()
    const type = ["BEERS","COFFEES","COCKTAILS","MILKSHAKES"]
    const [msg, setMsg] = useState('')
    const [msgColor, setMsgColor] = useState()
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
        name: '',
        title: '',
        type: '',
        time: '',
        location: ''
        }
      );
    // handle if modal is open or not
    const handleModal = () => {
        setIsActive(!isActive)
    }
    //handle the input values
    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({[name]: newValue});
        console.log(evt.target.value)
    }
    // send post request to database and also set new event to redux store
    const addRequest = () =>{
        const id = '_' + Math.random().toString(36).substr(2, 9) // create unique id
        const eventObj = {id:id, creator_avatarUrl: 'https://i.stack.imgur.com/l60Hf.png',creator_name:userInput.name, title:userInput.title, type:userInput.type, time:userInput.time, location:userInput.location}
        Axios.post('http://localhost:8081/events/newEvent/',eventObj)
        .then(response =>{
            console.log(response)
            if(response.status === 200) {
                const setAddEvent = () => (
                    { type: "ADDNEWEVENT", obj: eventObj }
                    );
                dispatch(setAddEvent())
                setMsg('Event added Succesfully!!!')
                setMsgColor(true)
                setUserInput({
                    name:'',
                    title: '',
                    type: '',
                    time: '',
                    location: ''
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
            <button onClick={()=>{handleModal()}} type="button" className="btn btn-dark">New Event</button>
            <Modal open={isActive} onClose={()=>{handleModal()}} center>
                <div>
                <h2>Add New Event</h2>
                <p>{msgColor ? <span style={{color:"#008000"}}>{msg}</span>: <span style={{color:"#FF0000"}}>{msg}</span>}</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" name="name" value={userInput.name} onChange={(e)=>{handleChange(e)}} aria-describedby="name" placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail2">Title</label>
                        <input type="text" className="form-control" name="title" value={userInput.title} onChange={handleChange} aria-describedby="title" placeholder="Enter title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail3">Type</label>
                        <select className="form-control" name="type" onChange={handleChange}>
                            <option value="">Select your option</option>
                            {type.map((itemType,i) => {
                                return <option                                
                                    key={i}
                                    value={itemType}>
                                    {itemType}
                                </option>
                            })}
                        </select>
                        {/* <input type="text" className="form-control" name="type" value={userInput.type} onChange={handleChange} placeholder="Enter type"/> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail4">Time</label>
                        <input type="date" className="form-control" name="time" value={userInput.time} onChange={handleChange} aria-describedby="time" placeholder="Enter location"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail5">Location</label>
                        <input type="text" className="form-control" name="location" value={userInput.location} onChange={handleChange} aria-describedby="location" placeholder="Enter location"/>
                    </div>
                    <input type="button" className="btn btn-primary" value="Submit" onClick={addRequest}></input>
                </form>
                </div>
            </Modal>
        </>
    )
}

export default AddEvent;