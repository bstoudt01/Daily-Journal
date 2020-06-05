// var journalEntries = [
//     {
//         date: "6.1.20",
//         title: "jscript",
//         entry: "we jumped into javascript today and Steve walked us through creating modular javascrip components",
//         mood: "potato"
//     },
     
//     {
//         date: "6.2.20",
//         title: "more and more jscript",
//         entry: "we jumped into javascript today and Steve walked us through creating modular javascrip components",
//         mood: "heady"
//     },
    
//     {
//         date: "6.3.20",
//         title: "functions in functions",
//         entry: "we jumped into javascript today and Steve walked us through creating modular javascrip components",
//         mood: "heady"
//     }
// ];


const journalEntryConverter = (journalEntry) => {
 const journalHTMLRepresentation = `<div class="journalEntryContainer">
 <section class = "entryLog__date">Date: ${journalEntry.date}</section>
 <section class = "entryLog__title">Concepts Covered: ${journalEntry.title}</section>
 <section class = "entryLog__entry">Journal Entry: ${journalEntry.entry}</section>
 <section class = "entryLog__mood>Mood: ${journalEntry.mood}</section>
</div>
</article> `
    // Create your own HTML structure for a journal entry
    return journalHTMLRepresentation
}
        
const showJournalEntries = () => {
    const journalObjectsArray = journalEntries

    for (const journalObject of journalObjectsArray){
        const journalHTMLRepresentation = journalEntryConverter(journalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTMLRepresentation
    }

}

showJournalEntries()
