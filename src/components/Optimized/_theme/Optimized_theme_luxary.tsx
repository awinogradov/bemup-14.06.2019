import { withBemMod } from '@bem-react/core';

import { cnOptimized } from '../Optimized';

import './Optimized_theme_luxary.css';

export interface OptimizedThemeLuxaryProps {
    theme?: 'luxary';
}

export const withThemeLuxary = withBemMod<OptimizedThemeLuxaryProps>(cnOptimized(), { theme: 'luxary' });
