export default async function RefPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    return <div>My Post: {slug} Ref</div>
}