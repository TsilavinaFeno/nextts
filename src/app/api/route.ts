export async function GET() {
    return new Response("<h1>Api authentification </h1>",
        {
            headers: {
                "Content-Type": "text/html"
            }
        }
    );
}