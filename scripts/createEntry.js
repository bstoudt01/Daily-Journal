
//journal entry object with paramaters set by key/value pairs that the same as our objects on the database.
const newJournalEntryObject = (journalDate, journalTitle, journalEntry, journalMood) => {
    return {
        date: journalDate,
        title: journalTitle,
        entry: journalEntry,
        mood: journalMood,
    };
};

export default newJournalEntryObject;