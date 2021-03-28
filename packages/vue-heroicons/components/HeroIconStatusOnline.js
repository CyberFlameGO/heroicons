import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconStatusOnline',
  functional: true,
  props: {
    size: { type: Number, default: 0 },
  },
  render (createElement, context) {
    const data = { ...context.data }
    if (context.props.size) {
      data.attrs.width = context.props.size
      data.attrs.height = context.props.size
    }
    data.attrs = {
      ...data.attrs,
      viewBox: `0 0 24 24`,
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      stroke: 'currentColor',
    }
    if (!data.domProps) data.domProps = {}
    data.domProps.innerHTML = '<path d="M5.63604 18.3639C2.12132 14.8492 2.12132 9.15071 5.63604 5.63599M18.364 5.63599C21.8787 9.15071 21.8787 14.8492 18.364 18.3639M8.46447 15.5355C6.51184 13.5829 6.51184 10.417 8.46447 8.46441M15.5355 8.46441C17.4882 10.417 17.4882 13.5829 15.5355 15.5355M13 11.9999C13 12.5522 12.5523 12.9999 12 12.9999C11.4477 12.9999 11 12.5522 11 11.9999C11 11.4477 11.4477 10.9999 12 10.9999C12.5523 10.9999 13 11.4477 13 11.9999Z" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    return createElement('svg', data)
  },
})
