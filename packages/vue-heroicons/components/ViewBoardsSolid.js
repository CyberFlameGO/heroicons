import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconViewBoardsSolid',
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
    data.domProps.innerHTML = '<path d="M2 4C2 3.44772 2.44772 3 3 3H5C5.55228 3 6 3.44772 6 4V16C6 16.5523 5.55228 17 5 17H3C2.44772 17 2 16.5523 2 16V4Z" fill="#4A5568"/><path d="M8 4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4V16C12 16.5523 11.5523 17 11 17H9C8.44772 17 8 16.5523 8 16V4Z" fill="#4A5568"/><path d="M15 3C14.4477 3 14 3.44772 14 4V16C14 16.5523 14.4477 17 15 17H17C17.5523 17 18 16.5523 18 16V4C18 3.44772 17.5523 3 17 3H15Z" fill="#4A5568"/>'
    return createElement('svg', data)
  },
})
