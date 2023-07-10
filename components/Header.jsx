import { Flex, Box, Text, Tabs, TabList, Tab, Image } from "@chakra-ui/react";
import  Link  from 'next/link'

export const Header = () => {
    return (
    <Flex as="header" align="center" p={4} maxW='1120px' justifyContent='space-between' margin='auto'>
      <Box display='flex' alignItems='center' justifyContent='center' gap='3' >
        <Image src='/healthtechLogo.png' borderRadius='full' h={50} w={50} marginBottom='1' />
        <Text fontSize="xl" fontWeight="bold">HealthTech w/ AI Vertex</Text>
      </Box>
      <Box>
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Tab>
                    <Link href='/Weproject'>
                        <a>We Project</a>
                    </Link>
                </Tab>
                <Tab>
                    <Link href='/App'>
                        <a>App</a>
                    </Link>
                </Tab>
                <Tab>
                    <Link href='/Weproject'>
                        <a>Team</a>
                    </Link>
                </Tab>
            </TabList>
        </Tabs>
            
            
      </Box>
    </Flex>
    )
}