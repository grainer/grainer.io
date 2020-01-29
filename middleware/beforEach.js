import { EventBus } from '@/plugins/eventBus.js'

export default function(context) {
  EventBus.$emit('reveal', 'top')
}
