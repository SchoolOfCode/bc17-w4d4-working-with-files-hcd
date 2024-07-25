import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";

export async function getQuotes() {
    try {
        const data = await fs.readFile(fileName, 'utf8');
        const quotes = json.parse (data);
        return quotes; 
    } catch (error) {
        console.error('Error reading file:', error);
    }
}


export async function addQuote(quoteText) {

}

export async function getRandomQuote() {

}

export async function editQuote(id, quoteText) {

}

export async function deleteQuote(id) {

}
