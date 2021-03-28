import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconZoomInSolid',
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
    data.domProps.innerHTML = '<path d="M5 8C5 7.44772 5.44772 7 6 7H7V6C7 5.44772 7.44772 5 8 5C8.55228 5 9 5.44772 9 6V7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H9V10C9 10.5523 8.55228 11 8 11C7.44771 11 7 10.5523 7 10V9H6C5.44772 9 5 8.55228 5 8Z" fill="#4A5568"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8ZM8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4Z" fill="#4A5568"/>'
    return createElement('svg', data)
  },
})
