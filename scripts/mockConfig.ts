import { createClient } from "pexels";
import { LoremIpsum } from "lorem-ipsum";
import { writeFile } from "fs/promises";

/* Photos */

const topics = [
    "Nature",
    "Technology",
    "Culture",
    "Health",
    "Science",
    "Food",
    "Music",
    "Sports",
    "Business",
    "Travel"
];

interface Photo {
    alt: string;
    src: string;
}

interface photoOptions {
    topic: string;
    count: number;
}

async function getPhotos(opts: photoOptions) {
    const client = createClient("SZptm2v00q3FbsLo65l85bsCW4oSRi0OL5hQTSOwHzC3nTHCs8e4jLYU");

    const photos: Photo[] = [];

    const res = await client.photos.search({
        query: opts.topic,
        per_page: opts.count
    });

    if ("photos" in res) {
        res.photos.forEach(photo => {
            photos.push({
                alt: photo.alt ?? "",
                src: photo.src.original
            });
        });
    }

    return photos;
}

/* Snippets */

type SnippetMedia = Photo | null;

interface Snippet {
    name: string;
    desc: string;
    media: SnippetMedia;
    tags: string[];
}

interface snippetOptions {
    count: number;
}

function getSnippets(opts: snippetOptions) {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 10,
            min: 4
        }
    });

    const snippets: Snippet[] = [];

    for (let i = 0; i < opts.count; ++i) {
        snippets.push({
            name: lorem.generateWords(3),
            desc: lorem.generateSentences(3),
            media: null,
            tags: lorem.generateWords(3).split(" ")
        });
    }

    return snippets;
}

/* Mock */

interface mockOptions {
    filename: string;
    totalCount: number;
}

async function mockConfig(opts: mockOptions) {
    const photos = await getPhotos({
        topic: topics[0],
        count: opts.totalCount
    });

    const snippets = getSnippets({
        count: opts.totalCount
    }).map((snippet, index) => {
        snippet.media = photos[index];
        return snippet;
    });

    await writeFile(opts.filename, JSON.stringify(snippets, null, 4));
}

mockConfig({
    filename: "src/meta/config.json",
    totalCount: 3
}).catch(err => {
    console.error(err);
});
