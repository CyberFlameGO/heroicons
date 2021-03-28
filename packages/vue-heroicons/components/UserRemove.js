import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconUserRemove',
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
    data.domProps.innerHTML = '<path d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14C5.68629 14 3 16.6863 3 20V21H15V20C15 16.6863 12.3137 14 9 14Z" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12L15 12" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    return createElement('svg', data)
  },
})
