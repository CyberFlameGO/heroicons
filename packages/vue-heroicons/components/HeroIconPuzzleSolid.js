import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconPuzzleSolid',
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
    data.domProps.innerHTML = '<path d="M10 3.5C10 2.67157 10.6716 2 11.5 2C12.3284 2 13 2.67157 13 3.5V4C13 4.55228 13.4477 5 14 5H17C17.5523 5 18 5.44772 18 6V9C18 9.55228 17.5523 10 17 10H16.5C15.6716 10 15 10.6716 15 11.5C15 12.3284 15.6716 13 16.5 13H17C17.5523 13 18 13.4477 18 14V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V16.5C13 15.6716 12.3284 15 11.5 15C10.6716 15 10 15.6716 10 16.5V17C10 17.5523 9.55228 18 9 18H6C5.44772 18 5 17.5523 5 17V14C5 13.4477 4.55228 13 4 13H3.5C2.67157 13 2 12.3284 2 11.5C2 10.6716 2.67157 10 3.5 10H4C4.55228 10 5 9.55228 5 9V6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 4.55228 10 4V3.5Z" fill="#374151"/>'
    return createElement('svg', data)
  },
})
