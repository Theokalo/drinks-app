import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'
import '../App.css'
import Event from './Event'
import AddEvent from './AddEvents'

const Events = () => {
  const events = useSelector(state => state.apiEvents)
  console.log(events)
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  useEffect( () => {
    // get events from the database
    Axios.get('http://localhost:8081/events/eventsData')
      .then(res => {
        console.log('test',res)
        // store events to redux store
        const setEvents = () => (
          { type: "EVENTS", obj: res.data }
          );
        dispatch(setEvents())  
      })
    // gets data from the database
    Axios.get('http://localhost:8081/comments/commentsData')
    .then(res => {
      // store comments to redux store
      const setComments = () => (
        { type: "COMMENTS", obj: res.data }
        );
      dispatch(setComments())  
    })
  }, []);

  // handle the value of input search
  const handleChange = (event) =>{
    setSearchValue(event.target.value)
  }

  // check if the search is empty and send data to child component 
  const eventList = () => {
    if(searchValue === '') {
      return events.map((currentEvent, i) => {
        return <Event event={currentEvent} key={i} />;
      });
    } else {
        const result = events.filter(word => word.title.includes(searchValue))
        console.log(result)
        return result.map((currentEvent, i) => {
          return <Event event={currentEvent} key={i} />;
        });
    }    
}

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col" align="center">
          <label>
            Search:
            <input type="text" value={searchValue} onChange={handleChange} placeholder="Search by title" />
          </label>
        </div>
        <div className="col" align="center">
          <AddEvent />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col" align="center">
          <b>Creator</b>
        </div>
        <div className="col" align="center">
          <b>Title</b>
        </div>
        <div className="col" align="center">
          <b>Type</b>
        </div>
        <div className="col" align="center">
          <b>Time</b>
        </div>
        <div className="col" align="center">
          <b>Location</b>
        </div>
      </div>
    </div>
    {eventList()}
    </>
  );    
}

export default Events;