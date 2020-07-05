import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { format } from "date-fns"
import '../App.css'
import AddComment from './AddComment'
import cocktail from '../assets/cocktail-icon.png'
import beer from '../assets/beer-icon.png'
import coffee from '../assets/coffee-icon.png'
import milkshake from '../assets/milkshake-icon.png'

const Event = props => {
    let date = Date.parse(props.event.time)    
    const comments = useSelector(state => state.apiComments) //get comments from redux store
    const [isExpand, setIsExpand] = useState(false)
    // handle if the event expand in order to show the comments
    const expand = () =>{
        setIsExpand(!isExpand)
    }
    // handle the image of every type
    const checkType = (type) => {
        if (type === 'COCKTAILS') {
            return(
                <>
                <img src={cocktail} alt="cocktails" width='30' height='30'/>
                <p>{type}</p>
                </>
            )
        }
        else if(type === 'BEERS') {
            return(
                <>
                <img src={beer} alt="beers" width='30' height='30'/>
                <p>{type}</p>
                </>
            )
        }
        else if(type === 'COFFEES') {
            return(
                <>
                <img src={coffee} alt="coffees" width='30' height='30'/>
                <p>{type}</p>
                </>
            )
        }
        else if(type === 'MILKSHAKES') {
            return(
                <>
                <img src={milkshake} alt="milkshake" width='30' height='30'/>
                <p>{type}</p>
                </>
            )
        } else{
            return <p>{type}</p>
        }
    }
    return(
        <>
            <div className="container eventHover" onClick={() =>{expand()}} style={{marginTop:'2%',marginBottom:'1%'}}>
                <div className="row">
                    <div className="col" align="center">
                        <img src={props.event.creator_avatarUrl} alt="" width="100" height="100" />
                    </div>
                    <div className="col" align="center">
                        {props.event.title}
                    </div>
                    <div className="col" align="center">
                        {checkType(props.event.type)}
                    </div>
                    <div className="col" align="center">
                        {format(date,"dd/MM/yyyy HH:mma")}
                    </div>
                    <div className="col" align="center">
                        {props.event.location}
                    </div>
                </div>
            </div>
            {isExpand? 
            <>                
                <h3 align="center">Comments <AddComment event_id={props.event.id}/></h3>
                {comments.map((item,i)=> {
                    if (item.events_id === props.event.id) {
                        let date = Date.parse(item.time)
                        return (
                            <div className="container" key={i}>
                                <div className="row">
                                    <div className="col-md-7 offset-md-5">
                                        <div className="media">
                                            <img src={item.user_com_avatarUrl} width="30" height="30" alt="user img"/>
                                            <div className="media-body">
                                                <h4 className="mt-0">{item.user_com_name}</h4>
                                                <h6 className="mt-0">{format(date,"dd/MM/yyyy HH:mma")}</h6>
                                                <p>{item.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )                    
                    }
                })}
                <div style={{border:'1px solid #000',width:'50%',position:'absolute', left:'30%'}}></div>
            </>
            :
            <div style={{border:'1px solid #000',width:'50%',position:'absolute', left:'30%'}}></div>
            }
        </>
    )
  }

export default Event;