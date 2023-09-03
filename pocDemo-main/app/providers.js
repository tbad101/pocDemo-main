// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'


const queryClient = new QueryClient()

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
    fonts: {
        heading: 'var(--font-rubik)',
        body: 'var(--font-rubik)',
    }
}
export const theme = extendTheme({ colors })
export function Providers({ children }) {
    return (
        <CacheProvider>
            <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
            </QueryClientProvider>
        </CacheProvider>
    )
}