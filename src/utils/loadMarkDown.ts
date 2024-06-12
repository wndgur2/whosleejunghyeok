async function loadMarkdown(title:string){
    let response = await fetch(`https://raw.githubusercontent.com/wndgur2/${title}/main/README.md`);
    const text = await response.text();
    return text;
}

export default loadMarkdown;