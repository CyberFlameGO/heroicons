import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconChatAltSolid',
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
      viewBox: `0 0 20 20`,
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'currentColor',
      stroke: 'none',
    }
    if (!data.domProps) data.domProps = {}
    data.domProps.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 5V13C18 14.1046 17.1046 15 16 15H11L6 19V15H4C2.89543 15 2 14.1046 2 13V5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5ZM7 8H5V10H7V8ZM9 8H11V10H9V8ZM15 8H13V10H15V8Z" fill="#4B5563"/>'
    return createElement('svg', data)
  },
})
