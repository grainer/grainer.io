// @ts-ignore
import { extend } from 'vue-breakpoint-component'

// Default configuration:
const config = {
  breakpoints: {
    small: '(min-width: 640px)',
    medium: '(min-width: 768px)',
    large: '(min-width: 1024px)',
    xlarge: '(min-width: 1280px)'
  },
  debounceTime: 100,
  experimental: false
}

const { VShowAt, VHideAt, VBreakpoint } = extend(config)

export default VBreakpoint

export { VShowAt, VHideAt, VBreakpoint }
