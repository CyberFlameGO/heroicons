import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconCursorClick',
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
    data.domProps.innerHTML = '<path d="M14.9998 15L12.9998 20L8.99983 9L19.9998 13L14.9998 15ZM14.9998 15L19.9998 20M7.18806 2.23853L7.96452 5.1363M5.13606 7.96472L2.23828 7.18826M13.9495 4.05029L11.8282 6.17161M6.17146 11.8284L4.05014 13.9497" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    return createElement('svg', data)
  },
})
