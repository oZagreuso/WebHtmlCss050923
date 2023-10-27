class DataBase 
{
    static async fetchJson(url) {
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        return json;
    }
}

export { DataBase }