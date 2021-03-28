import Vue from 'vue'

export default Vue.extend({
  name: '$PASCAL_NAME',
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
      viewBox: `0 0 $WIDTH $HEIGHT`,
      xmlns: 'http://www.w3.org/2000/svg',
      fill: '$FILL',
      stroke: '$STROKE',
    }
    data.domProps.innerHTML = '$SVGINNER'
    return createElement('svg', data)
  },
})
