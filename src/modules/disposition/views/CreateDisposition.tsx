import React, { FC } from 'react'
import { DispositionFormTags } from './../components/DispositionFormTags';

interface PruebaProps {}
const CreateDisposition: FC<PruebaProps> = ({})=> {
    console.log('entro')
    return (
        <DispositionFormTags />
    )
}

export default CreateDisposition;
