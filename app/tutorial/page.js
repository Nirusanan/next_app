import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Link from 'next/link'
import React from 'react'

async function getData() {
    const response = await fetch('http://localhost:3000/api/blog')

    const json = await response.json()

    return json
}

export default async function page() {
  const tutorials = await getData()
  console.log(tutorials)
  
    return (
        <>
            <List>
                {tutorials && tutorials.map((tutorial) => {
                    return <ListItem disablePadding key={tutorial.id}>
                        <ListItemButton>
                            <ListItemText primary={tutorial.lesson} />
                        </ListItemButton>
                    </ListItem>
                    
                })
                }
            </List>
        </>
    )
}
