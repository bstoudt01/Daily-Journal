
   
const Render = { 
    showJournalEntries () {
    const journalObjectsArray = journalEntries
    for (const journalObject of journalObjectsArray){
        const journalHTMLRepresentation = HTMLComponent.journalEntryConverter(journalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTMLRepresentation
    }
}
}
