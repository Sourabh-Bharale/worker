export async function POST(req:any,res:any) {
    const {message} = await req.body;
    console.log(message)
    return new Response(JSON.stringify({message}))
}