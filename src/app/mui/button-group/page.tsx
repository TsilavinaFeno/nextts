'use client'

import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';

const ButtonGroupPage: React.FC = () => {
    return (
        <Box>
            <Typography variant="h1" component="h2" gutterBottom>
                Button Group
            </Typography>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Basic Button Group
                </Typography>
                <ButtonGroup variant="contained" aria-label="contained button group" color='primary'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" aria-label="outlined button group" color='warning'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="text" aria-label="text button group" color='info'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Button Group Size
                </Typography>
                <ButtonGroup size="small" aria-label="small button group" color='primary'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup size="medium" aria-label="medium button group" color='warning'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup size="large" aria-label="large button group" color='info'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Button Group Orientation
                </Typography>
                <Stack direction="row" spacing={2}>
                    <ButtonGroup orientation="horizontal" color='primary'>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <ButtonGroup orientation="vertical" color='warning'>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </Stack>
            </Box>
        </Box>
    );
};

export default ButtonGroupPage;