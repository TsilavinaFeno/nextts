import React, { ReactNode } from 'react';
import styles from './style.module.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Layout;