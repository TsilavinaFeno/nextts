import Link from 'next/link';
import React from 'react';

const Page: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Page F3</h1>
            <p>This is the content of the page.</p>
            <Link href="/interception/f5" style={{ color: 'blue' }}>
                View Interception Page f5
            </Link>
        </div>
    );
};

export default Page;