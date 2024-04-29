'use client'
import { AppBar, Stack, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'

export default function Navbar() {
    
    return (
        <AppBar position='static'>
            <Toolbar sx={{display: 'flex',justifyContent: 'space-between',background: 'black'}} >
                <Typography variant='h5'>
                    Next
                </Typography>
                <Stack direction='row' spacing={4}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contacts">Contacts</Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
