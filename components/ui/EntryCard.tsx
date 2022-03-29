import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { DragEvent, FC } from 'react'
import { Entry } from '../../interfaces'
import { useContext } from 'react';
import { UIContext } from '../../context/ui';
import { useRouter } from 'next/router';
import { dateFunctions } from '../../utils';

interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({entry}) => {

    const {startDragging, endDragging} = useContext(UIContext)

    const router = useRouter()

    const onDragStart = (event: DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text', entry._id)

        // Todo: Modificar el estado, para indicar que estoy haciendo drag
        startDragging()
    }

    const onDragEnd = () => {
        //Todo: cancelar on drag
        endDragging()
    }

    const onClick = () => {
        router.push(`/entries/${entry._id}`)
    }
    
    

    return (
        <Card
            onClick={onClick}
            sx={{marginBottom: 1}}
            // Eventos Drag
            draggable={true}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{whiteSpace: 'pre-line'}}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: 2}}>
                    <Typography variant='body2'>{dateFunctions.getFormatDistanceToNow(entry.createdAt)}</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
