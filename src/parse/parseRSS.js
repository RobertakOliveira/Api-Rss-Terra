import RSSParser from "rss-parser";

const feedUrl = "https://www.terra.com.br/rss.xml";

const parse = async url => {
    const feed = await new RSSParser().parseURL(url);

    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(`${item.title} - ${item.link}\n${item.contentSnippet}\n\n`);
    });
};

console.log("Parsing " + feedUrl);

parse(feedUrl);

//para rotar "node parseRSS.js" no terminal de caminho src/parse