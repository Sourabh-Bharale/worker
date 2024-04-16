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
        branch,
        diff_hunk } = await req.json();
        const decodedFileContent = decodeURIComponent(file_contents);
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
        file_contents:decodedFileContent,
        branch,
        diff_hunk
    })

    return new Response(JSON.stringify({ message: 'success' }), { status: 200 })
}