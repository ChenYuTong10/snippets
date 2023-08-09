interface SnippetMedia {
    alt: string;
    src: string;
}

interface Snippet {
    name: string;
    desc: string;
    media: SnippetMedia;
    tags: string[];
}

const snippets: Snippet[] = [
    {
        name: "ad amet ad",
        desc: "Et eiusmod proident pariatur consequat deserunt excepteur. Dolor ullamco consequat amet minim aliquip excepteur id. Ea laborum minim elit nostrud incididunt fugiat.",
        media: {
            alt: "Photo Of Stream During Daytime",
            src: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg"
        },
        tags: ["Lib", "Microsoft", "Editor"]
    },
    {
        name: "aliqua nostrud excepteur",
        desc: "Incididunt duis deserunt occaecat. Lorem ullamco culpa duis magna quis aliqua nulla aute anim. Quis cillum minim adipisicing tempor irure laborum officia deserunt.",
        media: {
            alt: "Person Walking Between Green Forest Trees",
            src: "https://images.pexels.com/photos/15286/pexels-photo.jpg"
        },
        tags: ["Google", "Desktop", "Framework"]
    },
    {
        name: "non aute ipsum",
        desc: "Dolore labore ex voluptate. Nostrud exercitation in sint velit et. Officia tempor incididunt commodo cillum consectetur duis.",
        media: {
            alt: "Scenic View Of Snow Capped Mountains During Night",
            src: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg"
        },
        tags: ["UI", "React"]
    }
];

export default snippets;
