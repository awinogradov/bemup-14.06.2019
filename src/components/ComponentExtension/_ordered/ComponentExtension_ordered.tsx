import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnComponentExtension, ComponentExtension, ComponentExtensionProps, TTag } from '../ComponentExtension';

export interface ComponentExtensionOrderedProps {
    ordered?: boolean;
}

export const withOrdered = withBemMod<ComponentExtensionOrderedProps, ComponentExtensionProps>(
    cnComponentExtension(),
    { ordered: true },
    (Base) => props => {
        const ComponentExtensionBase = Base as typeof ComponentExtension;
        class ComponentExtensionOrdered extends ComponentExtensionBase<ComponentExtensionOrderedProps> {
            tag(): TTag {
                return 'ol';
            }
        }

        return <ComponentExtensionOrdered {...props} />;
});
