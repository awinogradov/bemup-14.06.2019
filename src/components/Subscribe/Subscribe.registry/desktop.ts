import { Registry } from '@bem-react/di';

import { cnSubscribe } from '../Subscribe';
import { SubscribeButton } from '../Button/Subscribe-Button@desktop';

export const subscribeRegistry = new Registry({ id: cnSubscribe() });

subscribeRegistry.set('Button', SubscribeButton);
