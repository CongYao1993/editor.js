import * as React from 'react';
import { Document } from './Document';
import { Document as DocumentModel } from '../model/Document';

export function EditArea(props: { data: any }) {
    const document = DocumentModel.create(props.data);
    return (
        <div>
            <Document document = {document} />
        </div>
    )
}