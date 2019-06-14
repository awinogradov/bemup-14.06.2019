import React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export const cnComponentExtension = cn('ComponentExtension');

export interface ComponentExtensionProps extends IClassNameProps {
    items: string[];
}

export type TTag = keyof JSX.IntrinsicElements;

export class ComponentExtension<P> extends React.PureComponent<P & ComponentExtensionProps> {
    tag(): TTag {
        return 'ul';
    }

    render() {
        const props = this.props;
        const Tag = this.tag();

        return (
            <Tag className={cnComponentExtension(null, [props.className])}>
                {props.items.map((item, i) => <li key={`${item}-${i}`}>{item}</li>)}
            </Tag>
        );
    }
}
