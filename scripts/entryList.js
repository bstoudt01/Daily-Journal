let journalEntries = []   
   
const showJournalEntries = () => {
    const journalObjectsArray = journalEntries

    for (const journalObject of journalObjectsArray){
        const journalHTMLRepresentation = journalEntryConverter(journalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTMLRepresentation
    }

}