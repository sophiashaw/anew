import React from 'react';
import { Center, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function StartPage() {
    return (
        <Center>
            <div className='App' style={{ backgroundColor: '#9c3848', height: '844px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Text fontSize="30px" width='200px' color="white" mb={4}>Everyone deserves a chance to start</Text>
                <img src={'/anew_logo.png'} alt="anew logo" style={{ maxWidth: '100%', height: 'auto' }} />
                <Link to="/next-page"> {/* Change '/next-page' to the desired route */}
                    <Button textColor='white' bgColor="#ef7a43" size="lg" mt={4} borderColor="White">
                        Go to Next Page
                    </Button>
                </Link>
            </div>
        </Center>
    );
}
