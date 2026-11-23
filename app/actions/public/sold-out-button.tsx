import { clientEntry } from 'remix/component'

// Headless UI libraries hand out untyped attribute objects that use "" for a present boolean.
const attrs: Record<string, unknown> = { disabled: '' }

export const SoldOutButton = clientEntry(import.meta.url, function SoldOutButton() {
  return () => (
    <button type="button" id="sold-out" {...attrs}>
      Sold out
    </button>
  )
})
