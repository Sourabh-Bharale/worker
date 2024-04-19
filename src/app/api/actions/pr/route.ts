export async function POST(req: any, res: any) {
    const { comment_body,
        comment_url, pr_url, repo, pr_number, pr_title, pr_body, pr_author, file_path, file_url, file_line, branch, diff_hunk } = await req.json();

    // get file content
    const fileRes = await fetch(`https://raw.githubusercontent.com/${repo}/${branch}/${file_path}`,{
        headers:{
            'Authorization': `bearer ${process.env.GITHUB_API_TOKEN}`,
        }
    })
    const fileContent = await fileRes.text()

    console.log({ comment_body, comment_url, pr_url, repo, pr_number, pr_title, pr_body, pr_author, file_path, file_url, fileContent, file_line, branch, diff_hunk });

    return new Response(JSON.stringify({ message: 'success' }), { status: 200 });
}