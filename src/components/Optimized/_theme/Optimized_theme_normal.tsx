import { withBemMod } from '@bem-react/core';

import { cnOptimized } from '../Optimized';

import './Optimized_theme_normal.css';

export interface OptimizedThemeNormalProps {
    theme?: 'normal';
}

export const withThemeNormal = withBemMod<OptimizedThemeNormalProps>(cnOptimized(), { theme: 'normal' });
