import {
  type GetAccountReturnType,
  getAccount,
  watchAccount,
} from '@wagmi/core'

import type { ConfigParameter } from '../types/properties.js'
import { useConfig } from './useConfig.js'
import { useSyncExternalStoreWithTracked } from './useSyncExternalStoreWithTracked.js'

export type UseAccountParameters = ConfigParameter

export type UseAccountReturnType = GetAccountReturnType

/** https://wagmi.sh/react/hooks/useAccount */
export function useAccount(
  parameters: UseAccountParameters = {},
): UseAccountReturnType {
  const config = parameters.config ?? useConfig()
  return useSyncExternalStoreWithTracked(
    (onChange) => watchAccount(config, { onChange }),
    () => getAccount(config),
  )
}
