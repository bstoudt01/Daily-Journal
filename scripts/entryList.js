import HTMLComponent from "./entryComponent.js"

   
const Render = { 
    showJournalEntries (journalObjectsArray) {
        console.log(journalObjectsArray)
    // const journalObjectsArray = API.useJournalEntries()
    for (const journalObject of journalObjectsArray){
        const journalHTMLRepresentation = HTMLComponent.journalEntryConverter(journalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTMLRepresentation
    }
}
}

export default Render