/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getJournalEntries } from "./JournalData.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
import { getJournalEntries } from "./journalData.js"
const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entryLog = document.querySelector("#entryLog")
    const entries = getJournalEntries()

    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryHTMLRepresentation += `${journalEntry(entry)}`
        }
        entryLog.innerHTML += `${entryHTMLRepresentation}`
  
}