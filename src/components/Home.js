import React, {useEffect} from 'react'
import '../App.css'
import logo from '../assets/custom_logo.png'
import Axios from 'axios'

const Home = () => {
    useEffect( () => { 
        const fetchData = async () => {
            // get data from the third party api
            const result = await Axios(
            'https://mock-api.drinks.test.siliconrhino.io/events',
            );
            const data = result.data.map(item=>{
                    return item
            })

            const removeNulls = data.filter(item=> item.comments.length > 0)
            // get the not Null comments
            const comments = removeNulls.map((item,i)=> {
                return {
                    msg:item.comments,
                    id: item.id
                }
            })
            // post the events to database
            Axios.post('events/',result)
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error.response)
            })
            // post comments to database
            Axios.post('comments/',comments.map(item => {
                return item
            }))
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error.response)
            })  
        };
     
        fetchData();
      }, []);
    return (
        <div style={{backgroundColor:"#DBB561"}}>
            <div  align="right">
                <img src={logo} width="60%" height="60%" alt="logo"/>
            </div>
        </div>
    )
}

export default Home;