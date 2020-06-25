
const updateFormFields = (entryObject) => {
	
	// variables set equal to the data of an html element, all of journal input elements (including the hidden id)
    const hiddenJournalId = document.querySelector("#journalId");
	const journalDateInput = document.querySelector("#journalDate");
	const journalTitleInput = document.querySelector("#journalTitle");
	const journalEntryInput = document.querySelector("#journalEntry");
	const journalMoodInput = document.querySelector("#journalMood");
	// sets the value of the journal input fields equal to the single "entryobject" being passed through, populating those fields with the properties in that object.
	hiddenJournalId.value = entryObject.id;
	journalDateInput.value = entryObject.date
	journalTitleInput.value = entryObject.title;
	journalEntryInput.value = entryObject.entry;
	journalMoodInput.value = entryObject.mood;
	
}

export default updateFormFields;