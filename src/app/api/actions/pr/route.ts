import { GithubRepoLoader } from "langchain/document_loaders/web/github";

export async function POST(req: any, res: any) {
    const { comment_body,
        comment_url, pr_url, repo, pr_number, pr_title, pr_body, pr_author, file_path, file_url, file_line, branch, diff_hunk , file_content } = await req.json();
    console.log({ comment_body, comment_url, pr_url, repo, pr_number, pr_title, pr_body, pr_author, file_path, file_url, file_line, branch, file_content, diff_hunk });

    return new Response(JSON.stringify({ message: 'success' }), { status: 200 });
}