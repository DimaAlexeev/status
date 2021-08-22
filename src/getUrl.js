
export  async function  getCities(){

    let url = "http://localhost:3000/cities.json";
    let response = await fetch(url);
    
    let commits = await response.json();  
    return commits;
}
