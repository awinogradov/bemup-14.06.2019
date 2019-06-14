import React from 'react';

export interface SubcribeButtonProps {
    children: React.ReactNode;
}

export const SubcribeButton: React.FC<SubcribeButtonProps> = props => 
    <button>{props.children}</button>;

