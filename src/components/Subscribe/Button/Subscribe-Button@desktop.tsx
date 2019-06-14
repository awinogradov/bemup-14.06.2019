import React from 'react';

import { SubcribeButtonProps, SubcribeButton as SubcribeButtonBase } from './Subscribe-Button';

export const SubscribeButton: React.FC<SubcribeButtonProps> = props => 
    <SubcribeButtonBase {...props}>{props.children} desktop</SubcribeButtonBase>
