import React from 'react';
import { cn } from '@bem-react/classname';

export const cnOptimized = cn('Optimized');

export interface OptimizedProps {
    className: string;
    children: React.ReactNode;
}

export const Optimized: React.FC<OptimizedProps> = props => 
    <div className={cnOptimized(null, [props.className])}>{props.children}</div>
