//import HTMLComponent from "./entryList.js"

// an object (needed for exporting) that contains a method journalEntryConverter,
// the method is expecting 1 paramater that it can use to populate the journal html represntation
// the paramater journalEntry is actually a single journalobject (w. the correct number of paramaters) being passed through a journal list generatior
const HTMLComponent = {
    journalEntryConverter (journalEntry) {
    const journalHTMLRepresentation = `
    <div class="journalEntryContainer">
        <section class = "entryLog__date">Date: ${journalEntry.date}</section>
        <section class = "entryLog__title">Concepts Covered: ${journalEntry.title}</section>
        <section class = "entryLog__entry">Journal Entry: ${journalEntry.entry}</section>
        <section class = "entryLog__mood">Mood: ${journalEntry.journalMood.mood}</section>
        <button id="editEntry--${journalEntry.id}">Edit Entry</button>
        <button id="deleteEntry--${journalEntry.id}">Delete Entry</button>
   </div>`
       // Create your own HTML structure for a journal entry
       return journalHTMLRepresentation
   },
   moodRadioButtons (radioButton) {
       const moodButtonHTMLRepresentation = `
           <option value="${radioButton.id}">${radioButton.mood}</option>
           `

       return moodButtonHTMLRepresentation
   }
}

export default HTMLComponent