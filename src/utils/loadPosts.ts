export async function loadMetaData() {
    let response = await fetch('/contents/titles.json');
    const titles = await response.json();

    const data = [];
    for (const title of titles.titles) {
        response = await fetch(`/contents/metadata/${title}.json`);
        const content = await response.json();
        data.push(content);
    }
    return data;
}
