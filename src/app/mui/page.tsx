'use client';

import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Page: React.FC = () => {
    return (
        <Container>
            <Box pb={2} mb={2} sx={{ backgroundColor: 'primary.main', color: "primary.contrastText", }}>
                <Typography variant="h1" component="p" gutterBottom>
                    Page
                </Typography>
            </Box>
            <Box>
                Box 2
            </Box>
        </Container>
    );
};

export default Page;