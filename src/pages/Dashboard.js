import React, { useEffect, useState } from 'react'
import axios from 'axios'
import APITable from '../components/APITable';

const Dashboard = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // API call to get users with geo
    const getData = async () => {
      let url = 'https://jsonplaceholder.typicode.com/users';
      await axios.get(url)
        .then(res => {
          console.log(res)
          setData(res.data);
        })
        .catch(err => {
          alert(err);
        })
    }

    getData();
  }, [])

  return (
    <>
      <h3 style={{marginTop: '-20px'}}>Dashboard</h3>
      <p style={{fontSize: '18px'}}>Contains users from this 
        <a style={{ color: 'gray'}} href='https://jsonplaceholder.typicode.com/users'> API </a>
      </p>
      <APITable data={data} />
    </>
  )
}

export default Dashboard