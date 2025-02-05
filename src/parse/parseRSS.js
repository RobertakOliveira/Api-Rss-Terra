import RSSParser from "rss-parser";
import fs from 'fs'; 

const feedUrl = "https://www.terra.com.br/rss.xml";

const parse = async url => {
    const feed = await new RSSParser().parseURL(url);

    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(`${item.title} - ${item.link}\n${item.contentSnippet}\n\n`);
    });

    return feed;
};

//para rotar "node parseRSS.js" no terminal de caminho src/parse

const saveToJson = (data, filename) => {
    const jsonData = JSON.stringify(data, null, 2); // Converte para JSON com formatação
    fs.writeFileSync(filename, jsonData); // Salva o JSON em um arquivo
    console.log(`Dados salvos em ${filename}`);
};

const createFileJson = async () => {
    console.log("Parsing " + feedUrl);
    const feedData = await parse(feedUrl);
    saveToJson(feedData, 'feed.json'); // Salva os dados em um arquivo JSON
};

createFileJson();