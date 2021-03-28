import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconDocumentReportSolid',
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
    data.domProps.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V7.41421C16 6.88378 15.7893 6.37507 15.4142 6L12 2.58579C11.6249 2.21071 11.1162 2 10.5858 2H6ZM8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12V15C6 15.5523 6.44772 16 7 16C7.55228 16 8 15.5523 8 15V12ZM10 9C10.5523 9 11 9.44772 11 10V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V10C9 9.44772 9.44772 9 10 9ZM14 8C14 7.44772 13.5523 7 13 7C12.4477 7 12 7.44772 12 8V15C12 15.5523 12.4477 16 13 16C13.5523 16 14 15.5523 14 15V8Z" fill="#4B5563"/>'
    return createElement('svg', data)
  },
})