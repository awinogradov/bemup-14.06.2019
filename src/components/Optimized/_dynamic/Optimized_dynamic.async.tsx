import React from 'react';

import { cnOptimized } from '../Optimized';
import './Optimized_dynamic.css';

const DynamicPart: React.FC = () => 
    <i className={cnOptimized('Inner')}>Загружено динамически</i>;

export default DynamicPart;
