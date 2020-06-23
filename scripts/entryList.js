import HTMLComponent from "./entryComponent.js"
//import registerListeners from "./journal.js"... removed this from this module and invoked it in the journal.js...
   
const Render = { 
    
    //This Function (method) is Responsible for rendering all the objects to the DOM
    showJournalEntries (journalObjectsArray) {
        console.log(journalObjectsArray)
        const clearEntryLog = document.querySelector(".entryLog")
        clearEntryLog.innerHTML = ""
    for (const journalObject of journalObjectsArray){
        const journalHTMLRepresentation = HTMLComponent.journalEntryConverter(journalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTMLRepresentation
    }
    //registerListeners.registerListeners();

}
}

export default Render