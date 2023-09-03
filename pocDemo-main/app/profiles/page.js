'use client'
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Input,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'

import { useState } from 'react'

import { useUserData } from '../hooks/useQueryData'


const Testimonial = (props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={6}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({ src, name, title, }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {

  const [pageIndex, setPageIndex] = useState(1)
 
  const { isLoading, error, data } = useUserData(pageIndex)
  console.log("🚀 ~ file: page.js:95 ~ WithSpeechBubbles ~ isLoading,error,data:", isLoading, error, data?.data)

  const prevPage = () => {
    setPageIndex((prev) => {
      if (prev > 1)
        return prev -= 1
      else
        return prev
    }
    )
  }
  const nextPage = () => {
    setPageIndex( (prev) => {
      if (prev === data?.data?.total_pages) {
        return prev
      }
      else {
        return (prev += 1);

      }

    });
  }


  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'10xl'} py={5} as={Stack} spacing={6}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our User Profiles</Heading>
          {/* <Input placeholder='Search by Name'
            _placeholder={{ color: 'inherit' }}
            maxW={'xl'}
            size='lg'
            borderColor={'blue.800'}
          /> */}
           <Text fontSize='xl'>Page : - {pageIndex}</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 6, md: 4, lg: 10 }}>
            {isLoading && <h1>Loading...</h1>}

          {!isLoading && data?.data?.data?.map((item) => {
            return (
              <Testimonial key={`${item.email}`}>
                <TestimonialContent>
                  <TestimonialHeading>{item.first_name} {" "} {item.last_name}</TestimonialHeading>
                  <TestimonialText>
                    {item.email}
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={item.avatar}
                  name={item.first_name}
                // title={'CEO at ABC Corporation'}
                />
              </Testimonial>

            )

          })}




        </Stack>
        <Stack direction='row' align='center' >

          <Button colorScheme='teal' size='md' onClick={prevPage} isDisabled = {pageIndex === 1}>
            Previous
          </Button>
          <Button colorScheme='teal' size='md' onClick={nextPage} isDisabled = {pageIndex === data?.data?.total_pages}>
            Next
          </Button>

        </Stack>
      </Container>

    </Box>
  )
}
