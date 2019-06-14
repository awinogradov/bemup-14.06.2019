import React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import { useComponentRegistry } from '@bem-react/di';

import { SubscribeRegistry } from './Subscribe.registry' ;

export const cnSubscribe = cn('Subscribe');

export const Subscribe: React.FC<IClassNameProps> = props => {
    const { Button } = useComponentRegistry<SubscribeRegistry>(cnSubscribe());

    return (
        <div className={cnSubscribe(null, [props.className])}>
            <h2>Самая полезная рассылка</h2>
            <Button>Подписаться</Button>
        </div>
    );
}
