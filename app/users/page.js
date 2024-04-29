import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Link from 'next/link'
import React from 'react'

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()

    return json
}


export default async function page() {
  const users = await getData()
  console.log(users)
  
    return (
        <>
            <List>
                {users && users.map((user) => {
                    return <Link href={`/users/${user.id}`}>
                    <ListItem disablePadding key={user.id}>
                        <ListItemButton>
                            <ListItemText primary={user.name} />
                        </ListItemButton>
                    </ListItem>
                    </Link>
                })
                }
            </List>
        </>
    )
}