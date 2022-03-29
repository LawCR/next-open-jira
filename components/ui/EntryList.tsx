import { List, Paper } from "@mui/material"
import { DragEvent, FC, useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";
import { EntryStatus } from "../../interfaces"
import { EntryCard } from "./EntryCard"
import styles from './EntryList.module.css'

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({status}) => {

    const {entries, updateEntry} = useContext(EntriesContext)
    const {isDragging, endDragging} = useContext(UIContext)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status ), [entries])
    
    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text')
        const entry = entries.find( entry => entry._id === id)!
        entry.status = status
        updateEntry(entry)
        endDragging()
    }

    return (
        // Todo: Aqui haremos drop
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ''}
        >
            <Paper sx={{height: 'calc(100vh - 200px)', overflow: 'auto', backgroundColor: 'transparent', padding: "1px 5px"}} >
                {/* Todo: Cambiara la opacidad dependiendo si se esta haciendo drag */}
                <List sx={{opacity: isDragging ? 0.2 : 1, transition: 'all .3s'}} >
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}
