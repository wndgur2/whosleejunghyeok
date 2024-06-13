async function loadMarkdown(title:string, category:string){
    let url;
    if(category == "project") url = `https://raw.githubusercontent.com/wndgur2/${title}/main/README.md`;
    else return "";
    try{
        let response = await fetch(`https://raw.githubusercontent.com/wndgur2/${title}/main/README.md`)
        const text = await response.text();
        return text;
    } catch{
        console.error("Failed to load markdown");
        return "";
    }
}

export default loadMarkdown;