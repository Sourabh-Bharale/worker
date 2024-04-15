export async function POST(req: any, res: any) {
    const { comment_body,
        comment_url,
        pr_url } = await req.json();
    console.log('Comment Body:', comment_body);
    console.log('Comment URL:', comment_url);
    console.log('PR URL:', pr_url);
    return new Response(JSON.stringify({ message: 'success' }), { status: 200 })
}