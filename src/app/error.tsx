'use client';

import React from 'react';

interface GlobalErrorProps {
    error: Error;
    resetErrorBoundary: () => void;
}

const GlobalError: React.FC<GlobalErrorProps> = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
};

export default GlobalError;