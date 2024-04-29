import { Stack, Typography } from '@mui/material'
import React from 'react'

export const metadata = {
  title: "Next | About",
  description: "About page",
};

export default function Home() {
  return (
    <Stack spacing={5} mt={10} mb={20}>
      <Typography variant='h3'>About</Typography>
      <Typography color={'gray'}>
        Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
        Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.
        Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.

        On the left side of the screen, you'll find the docs navbar. The pages of the docs are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your application. However, you can read them in any order or skip to the pages that apply to your use case.
        On the right side of the screen, you'll see a table of contents that makes it easier to navigate between sections of a page. If you need to quickly find a page, you can use the search bar at the top, or the search shortcut (Ctrl+K or Cmd+K).
      </Typography>
    </Stack>

  )
}
