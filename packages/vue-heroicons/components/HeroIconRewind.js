import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconRewind',
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
    data.domProps.innerHTML = '<path d="M12.0665 11.2C11.5332 11.6 11.5332 12.4 12.0665 12.8L17.3998 16.8C18.0591 17.2944 18.9998 16.824 18.9998 16V7.99999C18.9998 7.17594 18.0591 6.70556 17.3998 7.19999L12.0665 11.2Z" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.0665 11.2C3.53317 11.6 3.53317 12.4 4.0665 12.8L9.39984 16.8C10.0591 17.2944 10.9998 16.824 10.9998 16V7.99998C10.9998 7.17594 10.0591 6.70556 9.39984 7.19998L4.0665 11.2Z" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    return createElement('svg', data)
  },
})
