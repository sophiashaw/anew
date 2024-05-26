import React from 'react';
import { Center, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function StartPage() {
    return (
        <Center>
            <div className='App' style={{ backgroundColor: '#9c3848', height: '844px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src={'/anew.png'} alt="anew logo" style={{ maxWidth: '100%', height: 'auto' }} />
                <Link to="/FinancePage">
                    <Button textColor='white' bgColor="#ef7a43" fontSize={'30px'} size="lg" mt={4} outline="White" className='yeseva-one-regular'>
                        begin...
                    </Button>
                </Link>
            </div>
        </Center>
    );
}
