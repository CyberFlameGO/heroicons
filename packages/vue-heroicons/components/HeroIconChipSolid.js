import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconChipSolid',
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
    data.domProps.innerHTML = '<path d="M13 7H7V13H13V7Z" fill="#374151"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V3H11V2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V3H15C16.1046 3 17 3.89543 17 5V7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H17V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H17V15C17 16.1046 16.1046 17 15 17H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V17H9V18C9 18.5523 8.55228 19 8 19C7.44772 19 7 18.5523 7 18V17H5C3.89543 17 3 16.1046 3 15V13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H3V9H2C1.44772 9 1 8.55228 1 8C1 7.44772 1.44772 7 2 7H3V5C3 3.89543 3.89543 3 5 3H7V2ZM5 5H15V15H5V5Z" fill="#374151"/>'
    return createElement('svg', data)
  },
})
