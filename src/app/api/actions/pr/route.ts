import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { calculateLineNumber } from "@/lib/calculateLineNumber"

export async function POST(req: any, res: any) {
    const { comment_body,
        comment_url, pr_url, repo, pr_number, pr_title, pr_body, pr_author, file_path, file_url, file_line, branch, diff_hunk } = await req.json();

    // get file content
    const fileRes = await fetch(`https://raw.githubusercontent.com/${repo}/${branch}/${file_path}`, {
        headers: {
            'Authorization': `bearer ${process.env.GITHUB_API_TOKEN}`,
        }
    })
    const fileContent = await fileRes.text()

    console.log({ comment_body, comment_url, pr_url, repo, pr_number, pr_title, pr_body, pr_author, file_path, file_url, fileContent, file_line, branch, diff_hunk });

    const lineNumber = calculateLineNumber(diff_hunk, parseInt(file_line,10));
    console.log({lineNumber})

    // const prompt = ChatPromptTemplate.fromMessages([
    //     ["system", process.env.SYSTEM_PROMPT_TEMPLATE!],
    //     ["user", process.env.USER_PROMPT_TEMPLATE!],
    // ])

    // const model = new ChatOpenAI({
    //     apiKey: process.env.OPENAI_API_KEY,
    //     model: "gpt-4-turbo",
    //     temperature: 0.3,
    // })

    // const outputParser = new StringOutputParser();

    // const chain = prompt.pipe(model).pipe(outputParser);

    // const response = await chain.invoke({
    //     pr_title, pr_body, pr_author, pr_url, file_path, file_url, fileContent, file_line, diff_hunk, comment_url, comment_body
    // });

    // console.log(response);

    // console.log({ comment_body, comment_url, pr_url, repo, pr_number, pr_title, pr_body, pr_author, file_path, file_url, fileContent, file_line, branch, diff_hunk });

    return new Response(JSON.stringify({ message: 'success' }), { status: 200 });
}