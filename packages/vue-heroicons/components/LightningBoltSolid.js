import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconLightningBoltSolid',
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
    data.domProps.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3006 1.04621C11.7169 1.17743 12 1.56348 12 1.99995V6.99995L16 6.99995C16.3729 6.99995 16.7148 7.20741 16.887 7.53814C17.0592 7.86887 17.0331 8.26794 16.8192 8.57341L9.81924 18.5734C9.56894 18.931 9.11564 19.0849 8.69936 18.9537C8.28309 18.8225 8 18.4364 8 18L8 13H4C3.62713 13 3.28522 12.7925 3.11302 12.4618C2.94083 12.131 2.96694 11.732 3.18077 11.4265L10.1808 1.42649C10.4311 1.06892 10.8844 0.914992 11.3006 1.04621Z" fill="#4A5568"/>'
    return createElement('svg', data)
  },
})
