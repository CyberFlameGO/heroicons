import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconBanSolid',
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
    data.domProps.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4766 14.8907C12.4958 15.5892 11.2959 16 10 16C6.68629 16 4 13.3137 4 10C4 8.70414 4.41081 7.50423 5.1093 6.52339L13.4766 14.8907ZM14.8908 13.4765L6.52354 5.1092C7.50434 4.41077 8.7042 4 10 4C13.3137 4 16 6.68629 16 10C16 11.2958 15.5892 12.4957 14.8908 13.4765ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" fill="#4B5563"/>'
    return createElement('svg', data)
  },
})
