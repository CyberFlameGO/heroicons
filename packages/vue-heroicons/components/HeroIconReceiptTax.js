import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconReceiptTax',
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
    data.domProps.innerHTML = '<path d="M9 14L15 8M9.50003 8.5H9.51003M14.5 13.5H14.51M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21L8.5 19L12 21L15.5 19L19 21ZM10 8.5C10 8.77614 9.77614 9 9.5 9C9.22386 9 9 8.77614 9 8.5C9 8.22386 9.22386 8 9.5 8C9.77614 8 10 8.22386 10 8.5ZM15 13.5C15 13.7761 14.7761 14 14.5 14C14.2239 14 14 13.7761 14 13.5C14 13.2239 14.2239 13 14.5 13C14.7761 13 15 13.2239 15 13.5Z" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    return createElement('svg', data)
  },
})