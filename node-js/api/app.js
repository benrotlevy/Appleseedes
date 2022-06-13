import axios from 'axios';
import request from 'request';
import fetch from 'node-fetch';
import https from 'https';

const getWithAxios = async() => {
    const {data} = await axios.get("https://cat-fact.herokuapp.com/facts");
    console.log(data);
}

const getWithRequest = () => {
    request("https://cat-fact.herokuapp.com/facts", (error, response, body) => console.log(JSON.parse(body)));
}

const getWithFetch = async() => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    const data = await response.json();
    console.log(data);
}

const getWithHttps = () => {
    const request = https.get("https://cat-fact.herokuapp.com/facts", (res)=> {
        let data = '';
        res.on('data', (chunck) => {
            data += chunck.toString();
        });
        res.on('end', ()=> {
            const body = JSON.parse(data);
            console.log(body);
        })
    })
    // request.end();
}



// getWithAxios()
// getWithRequest()
// getWithFetch()
// getWithHttps()