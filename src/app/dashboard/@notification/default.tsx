import Link from 'next/link';
import React from 'react';

const DefaultNotificationPage: React.FC = () => {
    return (
        <div>
            <h1>Notifications</h1>
            <p>This is the default notification page.</p>
            <Link href="/dashboard/archived" style={{ color: 'blue' }}>
                View archived notifications
            </Link>
        </div>
    );
};

export default DefaultNotificationPage;