export default function Layout({
    children,
    notification,
    user,
}: {
    children: React.ReactNode
    notification: React.ReactNode
    user: React.ReactNode
}) {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid white' }}>
                    {children}
                </div>
            </div>
            <div style={{ flex: 1.5 }}>
                <div style={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid white' }}>
                    {notification}
                </div>
                <div style={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid white' }}>
                    {user}
                </div>
            </div>
        </div>
    )
}