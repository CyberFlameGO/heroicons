import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconMusicNote',
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
    data.attr = {
      ...data.attr,
      viewBox: `0 0 24 24`,
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      stroke: 'currentColor',
    }
    if (!data.domProps) data.domProps = {}
    data.domProps.innerHTML = '<path d="M9 19V6L21 3V16M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM21 16C21 17.1046 19.6569 18 18 18C16.3431 18 15 17.1046 15 16C15 14.8954 16.3431 14 18 14C19.6569 14 21 14.8954 21 16ZM9 10L21 7" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    return createElement('svg', data)
  },
})
