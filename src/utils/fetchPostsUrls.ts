const fetchPostUrls = async()=>{
    try{
        const response = await fetch('https://raw.githubusercontent.com/wndgur2/wndgur2.github.io/main/posts/urlList.json');
        const data = await response.json();
        return data;
    } catch(err){
        console.log(err);
    }
}

export default fetchPostUrls;