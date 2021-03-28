import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconCloudUploadSolid',
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
    data.domProps.innerHTML = '<path d="M5.5 13C3.567 13 2 11.433 2 9.5C2 7.69163 3.37146 6.20358 5.13102 6.01922C5.04553 5.69382 5 5.35223 5 5C5 2.79086 6.79086 1 9 1C10.8788 1 12.4551 2.29538 12.8845 4.04175C13.0857 4.01422 13.2912 4 13.5 4C15.9853 4 18 6.01472 18 8.5C18 10.9853 15.9853 13 13.5 13H11V9.41421L12.2929 10.7071C12.6834 11.0976 13.3166 11.0976 13.7071 10.7071C14.0976 10.3166 14.0976 9.68342 13.7071 9.29289L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289L6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L9 9.41421L9 13H5.5Z" fill="#374151"/><path d="M9 13H11L11 18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18L9 13Z" fill="#374151"/>'
    return createElement('svg', data)
  },
})