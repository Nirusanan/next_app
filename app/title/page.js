import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Link from 'next/link'
import React from 'react'

async function getData() {
    const response = await fetch('http://localhost:3000/api/items')
    const json = await response.json()

    return json
}


export default async function page() {
  const titles = await getData()
  console.log(titles)
  
    return (
        <>
            <List>
                {titles && titles.map((title) => {
                    return <ListItem disablePadding key={title.id}>
                        <ListItemButton>
                            <ListItemText primary={title.name} />
                        </ListItemButton>
                    </ListItem>
                    
                })
                }
            </List>
        </>
    )
}