import { Card, CardHeader, Textarea, Text, Box, Button } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'


const App = () => {
    return (
        <Box  mt='7rem' display='flex' alignItems='center' justifyContent='center'>
            <Card maxW='500px' align={'center'} >
                <CardHeader>
                    <Text>How was your experience in the programming class? We'd love to hear more about how you felt during your time in the class. Your thoughts and emotions are important to us, so please feel free to share your insights and reflections.</Text>
                    <Textarea mt='2rem' mb={'1rem'} placeholder='Have greate ideas 😊'/>
                    <Button mb='4' bg='black' color='white' alignSelf={'center'} > Submit </Button>
                    <Box display='flex' gap='2rem'>
                        <CheckCircleIcon color={'red.400'}/>
                        <CheckCircleIcon color={'green.400'}/>
                        <Text> Good Emotion </Text>
                        <CheckCircleIcon color={'yellow.400'}/>
                        <CheckCircleIcon color={'blue.400'}/>
                    </Box>
                </CardHeader>
            </Card> 
        </Box>
    )
}

export default App;