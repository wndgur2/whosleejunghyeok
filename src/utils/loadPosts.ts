export async function loadPostMetaData() {
    let response = await fetch('/posts/titles.json');
    const titles = await response.json();

    const data = [];
    for (const title of titles.titles) {
        response = await fetch(`/posts/metadata/${title}.json`);
        const content = await response.json();
        data.push(content);
    }
    return data;
}
