import type { RouteDefinition } from 'pelelajs'
import { Twitter } from './src/twitter'

export const routes: RouteDefinition[] = [
  { path: '/', component: Twitter },
  { path: '*', component: Twitter },
]
