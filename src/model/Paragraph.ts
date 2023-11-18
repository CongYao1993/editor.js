import { Node } from './Node';
import { generateNodeId } from '../util/id-generator';
import { IStyle } from './IStyle';
import { Segment } from './Segment';

export class Paragraph extends Node {
    public static create(json: any) {
        const { id, style, segments } = json;
        return new Paragraph(id, style, segments.map((segment) => Segment.create(segment)));
    }

    public style: IStyle;
    public segments: Segment[];
    constructor(id = generateNodeId(), style = {}, segments = []) {
        super(id, 'paragraph');
        this.style = style;
        this.segments = segments;
    }
}