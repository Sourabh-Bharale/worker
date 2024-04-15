import fs from 'fs'
import path from 'path';
export async function POST(req: any, res: any) {
    const { comment_body,
        comment_url,
        pr_url,
        repo,
        pr_number,
        pr_title,
        pr_body,
        pr_author,
        file_path,
        file_url,
        file_line,
        file_contents,
        diff_hunk } = await req.json();
    console.log({
        comment_body,
        comment_url,
        pr_url,
        repo,
        pr_number,
        pr_title,
        pr_body,
        pr_author,
        file_path,
        file_url,
        file_line,
        file_contents,
        diff_hunk
    })
    const file = await fetch(file_url)
    const buffer = await file.arrayBuffer()
    fs.writeFile(path.resolve('./',path.basename(file_url)),Buffer.from(buffer),()=>{
        console.log('file saved')
    })

    return new Response(JSON.stringify({ message: 'success' }), { status: 200 })
}