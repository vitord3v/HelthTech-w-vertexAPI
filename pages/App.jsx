import { Card, CardHeader, Textarea, Text, Box } from '@chakra-ui/react'


const App = () => {
    return (
        <Box  mt='7rem' display='flex' alignItems='center' justifyContent='center'>
            <Card maxW='500px' align={'center'} >
                <CardHeader>
                    <Text>Realize your search based in information</Text>
                    <Textarea mt='2rem' placeholder='Have greate ideas 😊'/>
                </CardHeader>
            </Card> 
        </Box>
    )
}

export default App;