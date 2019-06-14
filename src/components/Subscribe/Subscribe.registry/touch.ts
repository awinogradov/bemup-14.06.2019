import { Registry } from '@bem-react/di';

import { cnSubscribe } from '../Subscribe';
import { SubscribeButton } from '../Button/Subscribe-Button@touch';

export const subscribeRegistry = new Registry({ id: cnSubscribe() });

subscribeRegistry.set('Button', SubscribeButton);
