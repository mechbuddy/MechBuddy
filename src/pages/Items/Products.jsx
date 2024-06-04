import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Parts from './Parts'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
const Products = () => {
  
  let [data , setData] = useState({});
  let {id} = useParams();

  useEffect(() => {

    async function getData() {
        await axios.get(`https://api-phi-hazel.vercel.app/item/${id}`).then(response => {
            setData(response.data[0]);
            console.log(response.data[0])
        })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    getData();

}, [id])


  return (
    <div>
    <Navbar/>
    <Parts data={data} />
    <Footer/>
    </div>
  )
}

export default Products