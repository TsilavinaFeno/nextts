'use client';

import React from 'react';
import Button from '@mui/material/Button';
import { Box, IconButton, Tooltip, Typography, Badge, CircularProgress } from '@mui/material';
import { AddShoppingCart, Alarm, CloudUpload, Delete, Send, ShoppingCart } from '@mui/icons-material';

/**
 * ButtonPage component renders a page with various examples of Material-UI buttons.
 * 
 * @component
 * @example
 * return (
 *   <ButtonPage />
 * )
 * 
 * @returns {React.FC} A React functional component that displays different types of buttons, 
 * including default, contained, outlined, disabled, link, and buttons with different colors, sizes, 
 * icons, loading states, badges, and file upload functionality.
 * 
 * @remarks
 * - The component uses Material-UI components such as Box, Typography, Button, IconButton, Tooltip, Badge, and CircularProgress.
 * - It demonstrates various button styles and functionalities provided by Material-UI.
 * - The loading state is managed using React's useState and useEffect hooks.
 * - The handleFileChange function logs the selected files to the console.
 */
const ButtonPage: React.FC = () => {

    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files);
    };


    return (
        <Box mb={10}>
            <Typography variant="h1" component="h2" gutterBottom>
                Button Lists
            </Typography>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Button type
                </Typography>
                <Button color="primary" >
                    Default
                </Button>
                <Button variant="contained" color="primary">
                    Contain
                </Button>
                <Button variant="outlined" color="primary">
                    Outline
                </Button>
                <Button disabled>
                    Disabled
                </Button>
                <Button href='https://mui.com' target='_blank'>
                    Link
                </Button>
                {/* delete box-shadow */}
                <Button variant="outlined" color="primary" disableElevation>
                    disableElevation
                </Button>
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Button color
                </Typography>
                <Button color="primary" variant="contained">
                    Primary
                </Button>
                <Button color="secondary" variant="contained">
                    Secondary
                </Button>
                <Button color="error" variant="contained">
                    Error
                </Button>
                <Button color="warning" variant="contained">
                    Warning
                </Button>
                <Button color="info" variant="contained">
                    Info
                </Button>
                <Button color="success" variant="contained">
                    Success
                </Button>
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Button size
                </Typography>
                <Button size="small" variant="outlined">
                    Small
                </Button>
                <Button size="medium" variant="outlined">
                    Medium
                </Button>
                <Button size="large" variant="outlined">
                    Large
                </Button>
            </Box>
            <Box>
                <Typography variant='h3' component='h2' gutterBottom>
                    Button with icons and label
                </Typography>
                <Button variant="outlined" startIcon={<Delete />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<Send />}>
                    Send
                </Button>
            </Box>
            <Box>
                <Typography variant='h3' component='h2' gutterBottom>
                    IconButton
                </Typography>
                <IconButton aria-label="delete" color='error'>
                    <Delete />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <Delete />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <Alarm />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCart />
                </IconButton>
            </Box>
            <Box>
                <Typography variant='h3' component='h2' gutterBottom>
                    Loading and badge
                </Typography>
                <Tooltip title="Click to see loading">
                    <IconButton onClick={() => setLoading(true)}>
                        {loading ? (
                            <CircularProgress size={24} sx={{ color: "white" }} />
                        ) : (
                            <ShoppingCart sx={{ color: "white" }} fontSize="large" />
                        )}
                    </IconButton>
                </Tooltip>
                <Tooltip title="Cart">
                    <Badge badgeContent={2} overlap="circular" color="primary">
                        <IconButton>
                            <ShoppingCart fontSize="large" sx={{ color: "white" }} />
                        </IconButton>
                    </Badge>
                </Tooltip>
            </Box>
            <Box>
                <Typography variant='h3' component='h2' gutterBottom>
                    Upload file button
                </Typography>
                <Button component="label" variant="contained" startIcon={<CloudUpload />}>
                    Upload files
                    <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                </Button>
            </Box>
        </Box>
    );
};

export default ButtonPage;