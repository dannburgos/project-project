// Ids que enlazan cada pestaña de unas slides con su panel (aria-controls y
// aria-labelledby)
export function formatSlideTabId(prefix: string, index: number) {
  return `${prefix}-tab-${index}`;
}

export function formatSlidePanelId(prefix: string, index: number) {
  return `${prefix}-slide-${index}`;
}
