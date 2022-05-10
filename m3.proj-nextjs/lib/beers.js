import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const beersDirectory = path.join(process.cwd(), 'beers');

//fetches data from file system
export function getSortedBeersData() {
    // Get file names under /beers
    const fileNames = fs.readdirSync(beersDirectory);
    const allBeersData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id, using RegExp
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(beersDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the beer metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Sort beers by date
    return allBeersData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export async function getSortedAPIBeersData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('..');
    return res.json();
}


//import Data from a DB
// import someDatabaseSDK from 'someDatabaseSDK';

// const databaseClient = someDatabaseSDK.createClient(...);

// export async function getSortedPostsData() {
//     // Instead of the file system,
//     // fetch post data from a database
//     return databaseClient.query('SELECT posts...');
// }

export function getAllBeersIds() {
    const fileNames = fs.readdirSync(beersDirectory);

    // Returns an array of objects that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]

    //return the list of file names (excluding .md) in the posts directory:
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getBeersData(id) {
    const fullPath = path.join(beersDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
