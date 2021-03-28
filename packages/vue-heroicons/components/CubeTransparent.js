import Vue from 'vue'

export default Vue.extend({
  name: 'CubeTransparent',
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
    data.domProps.innerHTML = '<path d="M14 10L12 11M12 11L10 10M12 11V13.5M20 7L18 8M20 7L18 6M20 7V9.5M14 4L12 3L10 4M4 7L6 6M4 7L6 8M4 7V9.5M12 21L10 20M12 21L14 20M12 21V18.5M6 18L4 17V14.5M18 18L20 17V14.5" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    return createElement('svg', data)
  },
})
