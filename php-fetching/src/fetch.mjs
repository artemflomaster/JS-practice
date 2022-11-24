import fetch from "node-fetch";

//fetching a php file

async function getData() {
    try {
        console.log('Fetching');
        const url = 'http://localhost/phptest/php/db.php';

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed. Server response ${response.status}`)
        }
        const json = await response.json();
        console.log('Fetched!');
        // console.log(response);
        console.log(json);
        
        
    }
    catch (err) {
        console.error(err);
    }
}
getData();