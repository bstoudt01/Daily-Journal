import Render from "./entryList.js";
import API from "./data.js";
import newJournalEntryObject from "./createEntry.js";

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries()
    .then(response => Render.showJournalEntries(response))

//responsible for listening to a click the submit journal entry button to post the journal entry to the json database
const journalSubmitButton = document.querySelector(".submitJournalButton")


journalSubmitButton.addEventListener("click", (clickEvent) => {
   if ( 
        (document.getElementById("journalDate").value === "") ||
        //console.log(dateOfEntry)
        (document.getElementById("journalTitle").value === "") ||
        //console.log(conceptsCovered)
        (document.getElementById("journalEntry").value === "") ||
        //console.log(journalEntry)
        (document.getElementById("journalMood").value === "")
        // console.log(conceptsCovered) 
    ) 
   {alert ("you forgot something")}
        //document.querySelector(".quotesList").classList.toggle("hidden")
})



newJournalEntryObject();
//invoked the object containing a factory function whose responsibility is to generate an object that represents a journal entry.
const firstEntry = newJournalEntryObject("2020/02/12", "abc", "123", "happy")
console.log(firstEntry)