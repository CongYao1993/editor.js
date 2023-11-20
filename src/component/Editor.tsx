import * as React from 'react';
import { Toolbar } from './Toolbar';
import { EditArea } from './EditArea';

export function Editor(props: { data: any }) {
    return (
        <div>
            <Toolbar />
            <EditArea data = {props.data} />
        </div>
    )
}