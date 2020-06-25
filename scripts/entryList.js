import HTMLComponent from "./entryComponent.js"
//import registerListeners from "./journal.js"... removed this from this module and invoked it in the journal.js...
   
const Render = { 
    
    //This Function (method) is Responsible for rendering all the objects to the DOM
        // an array of journal entries is passed into the function
        // the entry log area on the dom is cleared
        // for each object in the array
        // each object is passed though the object -> html converter
        // then the entry log area in the html is targested and we inject each html converted object into the entry Log area of the dom.
    showJournalEntries (journalObjectsArray) {
        console.log(journalObjectsArray)
        document.querySelector(".entryLog").innerHTML = ""
    for (const journalObject of journalObjectsArray){
        const journalHTMLRepresentation = HTMLComponent.journalEntryConverter(journalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTMLRepresentation
    }
}
}

export default Render