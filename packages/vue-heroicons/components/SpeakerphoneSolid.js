import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconSpeakerphoneSolid',
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
    data.domProps.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 3C18 2.65342 17.8205 2.33156 17.5257 2.14935C17.2309 1.96714 16.8628 1.95058 16.5528 2.10557L8.76393 6H5C3.34315 6 2 7.34315 2 9C2 10.6569 3.34315 12 5 12H5.27925L7.05132 17.3162C7.18744 17.7246 7.56958 18 8.00001 18H9.00001C9.55229 18 10 17.5523 10 17V12.618L16.5528 15.8944C16.8628 16.0494 17.2309 16.0329 17.5257 15.8507C17.8205 15.6684 18 15.3466 18 15V3Z" fill="#4B5563"/>'
    return createElement('svg', data)
  },
})
