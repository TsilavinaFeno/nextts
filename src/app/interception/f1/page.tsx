import Link from 'next/link';
import React from 'react';

const F1Page: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the F1 Page</h1>
            <p>This is the F1 page content.</p>
            <Link href="/interception/f2" style={{ color: 'blue' }}>
                View F2 page
            </Link>
        </div>
    );
};

export default F1Page;