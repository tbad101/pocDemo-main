'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  OrderedList,
  ListItem
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'


// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  }
})

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>This is the headline</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          This is dedicated for project details and setup.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        {/* <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}> */}
        {/* {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))} */}
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Setup Basics
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <OrderedList>
                <ListItem>Basics
                  <OrderedList>
                    <ListItem>Next JS - 13</ListItem>
                    <ListItem>Node.js v20.3.1.</ListItem>
                    <ListItem>Package installer - Yarn - v1.22.19</ListItem>
                    <ListItem>Git clone the repo and run yarn install </ListItem>
                    <ListItem>After that either run yarn dev (if you want to start dev server) or yarn build and then yarn start (if you want to run actual app)</ListItem>
                  </OrderedList>
                </ListItem>
              </OrderedList>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  About the app and its code structure
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <OrderedList>

                <ListItem>It consists of reponsive Navbar and Home page </ListItem>
                <ListItem>Routing - NextJs Page routing </ListItem>
                <ListItem>Folder structire - For different component and pages seperate folder is created like - Components, servives, hooks, details and Profile </ListItem>
                <ListItem>Detail Page - This contain basic details of project alongwith answer to the question that has been asked. User can navigate to this page from Navbar</ListItem>
                <ListItem>Standard Libraries are used like for api call - axios , CSS framework - Chakra , fetch data handled using   - reactQuery</ListItem>
                <ListItem>Data is displayed in the form of card instead of Table because data contain Images which makes more sense with Card components.</ListItem>
                <ListItem>Has a control that allows the user to get the next (and previous) page of results</ListItem>

              </OrderedList>
            </AccordionPanel>
          </AccordionItem><AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Questions -
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <OrderedList>

                <ListItem><b>Question 1 :- What changes would you make to ensure that the component renders properly with server-side-rendering?</b>
                  <br></br>
                  Answer: - With NextJS we can use getServerSideProps for server-side-rendering getServerSideProps only runs on server-side and never runs on the browser. If a page uses getServerSideProps, then:

                  When you request this page directly, getServerSideProps runs at request time, and this page will be pre-rendered with the returned props
                  When you request this page on client-side page transitions through next/link or next/router, Next.js sends an API request to the server, which runs getServerSideProps

                  getServerSideProps returns JSON which will be used to render the page.  </ListItem>



                <ListItem><b>How would you ensure we test for or catch any changes to the API during development?</b>
                  <br></br>
                  Answer :-  This can be done by two ways one is internally and second is externally.

                  <OrderedList>
                    <ListItem>
                      Internally :- Handling API data from APP
                      <OrderedList>
                        <ListItem>
                          Using React Qurey to handle effectively api data. It provide information about Loading, error data etc. If API is updated to return more number of records and pages then this information will be usefull for handling UI effectively.
                        </ListItem>
                        <ListItem>
                          Traditional : - Try catch block will help us to catch error in api
                        </ListItem>
                        <ListItem>
                          Optional Chaining will ensure that components will be rendered or variables are used only when there is a data inside it.
                        </ListItem>
                      </OrderedList>
                    </ListItem>
                    <ListItem>
                      Externally :- Outside of APP
                      <OrderedList>
                        <ListItem>
                          Webhooks :- To get notification if any API change is made
                          Webhooks can be triggered whenever specific events occur on GitHub. For example, you can configure a webhook to trigger whenever:

                          Code is pushed to a repository
                          A pull request is opened
                          A GitHub Pages site is built
                          A new member is added to a team

                        </ListItem>
                      </OrderedList>
                    </ListItem>
                  </OrderedList>
                </ListItem>



              </OrderedList>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
        {/* </SimpleGrid> */}
      </Container>
    </Box>
  )
}
