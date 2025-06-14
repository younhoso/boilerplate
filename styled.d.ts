import 'styled-components';

import type { Theme } from '@/stories/app/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
