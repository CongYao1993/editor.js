import * as React from 'react';
import { Document } from './Document';
import { Document as DocumentModel } from '../model/Document';
import './style.css';

const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {

export function EditArea(props: { data: any }) {
    const document = DocumentModel.create(props.data);
    return (
        <div
            className='editArea'
            contentEditable="true"
            onKeyDown={onKeyDown}
        >
            <Document document = {document} />
        </div>
    )
}