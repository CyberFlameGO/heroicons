import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconScissors',
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
      viewBox: `0 0 24 24`,
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      stroke: 'currentColor',
    }
    if (!data.domProps) data.domProps = {}
    data.domProps.innerHTML = '<path d="M14.1213 14.1213L19 19M12 12L19 5M12 12L9.12132 14.8787M12 12L9.12132 9.12132M9.12132 14.8787C8.57843 14.3358 7.82843 14 7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C8.65685 20 10 18.6569 10 17C10 16.1716 9.66421 15.4216 9.12132 14.8787ZM9.12132 9.12132C9.66421 8.57843 10 7.82843 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10C7.82843 10 8.57843 9.66421 9.12132 9.12132Z" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    return createElement('svg', data)
  },
})
