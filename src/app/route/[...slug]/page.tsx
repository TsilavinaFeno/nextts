export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    console.log(slug);
    return (
        <div>
            <h1>My Page</h1>
        </div>
    )
}