import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconTrendingUpSolid',
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
    data.domProps.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5H17C17.5523 5 18 5.44772 18 6V11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11V8.41421L11.7071 12.7071C11.3166 13.0976 10.6834 13.0976 10.2929 12.7071L8 10.4142L3.70711 14.7071C3.31658 15.0976 2.68342 15.0976 2.29289 14.7071C1.90237 14.3166 1.90237 13.6834 2.29289 13.2929L7.29289 8.29289C7.68342 7.90237 8.31658 7.90237 8.70711 8.29289L11 10.5858L14.5858 7H12Z" fill="#4A5568"/>'
    return createElement('svg', data)
  },
})
