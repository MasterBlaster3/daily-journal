import { getJournalEntries } from "./JournalData.js"
import { EntryListComponent } from "./JournalEntryList.js"
import { JournalEntryComponent } from "./JournalEntry.js"


const showEntryList = () => {
    const PostEL = document.querySelector("#entryLog")
    getJournalEntries().then((allEntries) => {
        postEL.innerHTML = EntryListComponent(allEntries)
    })
}


