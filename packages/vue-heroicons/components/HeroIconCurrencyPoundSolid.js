import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconCurrencyPoundSolid',
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
    data.domProps.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 4C9.34315 4 8 5.34315 8 7V9H7C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H8V12C8 12.5523 7.55228 13 7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H9.82929C9.93985 12.6872 10 12.3506 10 12V11H11C11.5523 11 12 10.5523 12 10C12 9.44772 11.5523 9 11 9H10V7C10 6.44772 10.4477 6 11 6C11.5523 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8C13.5523 8 14 7.55228 14 7C14 5.34315 12.6569 4 11 4Z" fill="#4A5568"/>'
    return createElement('svg', data)
  },
})
