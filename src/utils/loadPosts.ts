export async function loadPostList() {
    const response = await fetch('/posts/postList.json');
    const posts = await response.json();
    console.log("POST LIST: ", posts);
    return posts;
}

export async function loadMarkdown(fileName:string) {
    const response = await fetch(`/posts/metadata/${fileName}.json`);
    const data = await response.json();
    return data;
}