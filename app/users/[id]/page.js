import { Typography } from '@mui/material'
import React from 'react'

export default async function page({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();
    console.log(data)

  return (
    <div>
      <Typography>Id: {params.id}</Typography> 
      <Typography> Name: {data.name} </Typography>
      <Typography> Email: {data.email} </Typography>
    </div>
  )
}
