import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconUserRemoveSolid',
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
      viewBox: `0 0 20 20`,
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'currentColor',
      stroke: 'none',
    }
    if (!data.domProps) data.domProps = {}
    data.domProps.innerHTML = '<path d="M11 6C11 7.65685 9.65685 9 8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6Z" fill="#4A5568"/><path d="M14 17C14 13.6863 11.3137 11 8 11C4.68629 11 2 13.6863 2 17H14Z" fill="#4A5568"/><path d="M13 8C12.4477 8 12 8.44771 12 9C12 9.55229 12.4477 10 13 10H17C17.5523 10 18 9.55229 18 9C18 8.44771 17.5523 8 17 8H13Z" fill="#4A5568"/>'
    return createElement('svg', data)
  },
})