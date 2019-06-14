import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnOptimized } from '../Optimized';

export interface OptimizedDynamicProps {
    dynamic?: boolean;
}

export const withDynamic = withBemMod<OptimizedDynamicProps>(
    cnOptimized(),
    { dynamic: true },
    Optimized => props => {
        const DynamicPart = React.lazy(() => import('./Optimized_dynamic.async'));

        return (
            <React.Suspense fallback={<div>Updating...</div>}>
                <Optimized {...props}>
                    <DynamicPart />
                </Optimized>
            </React.Suspense>
        );
    }
);
