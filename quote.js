import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";

export async function getQuotes() {
    try {
        const data = await fs.readFile(fileName, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading file:', error);
        return[];
    }
}


export async function addQuote(quoteText) {
    const quotes = await getQuotes();
    const newQuote = {
        id: uuidv4(),
        quoteText,
    };
    quotes.push(newQuote);
    await fs.writeFile(fileName, JSON.stringify(quotes, null, 2));
    return newQuote;

}

export async function getRandomQuote() {
    const data = await fs.readFile(fileName, 'utf8');
const quotes = JSON.parse(data);


}

export async function editQuote(id, quoteText) {

}

export async function deleteQuote(id) {

}
