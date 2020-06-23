//import HTMLComponent from "./entryList.js"

const HTMLComponent = {
    journalEntryConverter (journalEntry) {
    const journalHTMLRepresentation = `<div class="journalEntryContainer">
    <section class = "entryLog__date">Date: ${journalEntry.date}</section>
    <section class = "entryLog__title">Concepts Covered: ${journalEntry.title}</section>
    <section class = "entryLog__entry">Journal Entry: ${journalEntry.entry}</section>
    <section class = "entryLog__mood">Mood: ${journalEntry.mood}</section>
    <button id="editEntry--${journalEntry.id}">Edit Entry</button>
    <button id="deleteEntry--${journalEntry.id}">Delete Entry</button>
   </div>
   </article> `
       // Create your own HTML structure for a journal entry
       return journalHTMLRepresentation
   }
}

export default HTMLComponent