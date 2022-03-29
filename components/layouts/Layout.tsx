import { Box, Theme } from "@mui/material"
import Head from "next/head"
import { FC, useState, useContext } from 'react';
import { Navbar, Sidebar } from "../ui"
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from "../../themes"
import { UIContext } from "../../context/ui";

interface Props {
    title?: string,
}

export const Layout: FC<Props> = ({title = 'OpenJira', children}) => {

  const {mode} = useContext(UIContext)

  return (
    <ThemeProvider theme={mode ? darkTheme :lightTheme} >
      <CssBaseline />
      <Box sx={{ flexFlow: 1}}>
          <Head>
              <title>{title}</title>
          </Head>
          <Navbar />
          <Sidebar />
          <Box sx={{padding: '10px 20px'}}>
              { children }
          </Box>
      </Box>
    </ThemeProvider>
  )
}
