import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconShieldCheckSolid',
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
    data.domProps.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.16611 4.99891C5.17437 4.95809 7.91528 3.81033 10 1.94446C12.0847 3.81033 14.8256 4.95809 17.8339 4.99891C17.9431 5.64968 18 6.31821 18 7.00003C18 12.2249 14.6608 16.6698 10 18.3172C5.33923 16.6698 2 12.2249 2 7.00003C2 6.31821 2.05686 5.64968 2.16611 4.99891ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="#4A5568"/>'
    return createElement('svg', data)
  },
})
