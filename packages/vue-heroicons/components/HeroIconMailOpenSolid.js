import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconMailOpenSolid',
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
    data.domProps.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.94 6.4124C2.35524 6.77788 2 7.41882 2 8.1084V15.9999C2 17.1045 2.89543 17.9999 4 17.9999H16C17.1046 17.9999 18 17.1045 18 15.9999V8.1084C18 7.41882 17.6448 6.77788 17.06 6.4124L11.06 2.6624C10.4115 2.25706 9.58854 2.25706 8.94 2.6624L2.94 6.4124ZM5.5547 8.83462C5.09517 8.52826 4.4743 8.65244 4.16795 9.11197C3.8616 9.5715 3.98577 10.1924 4.4453 10.4987L9.4453 13.8321C9.7812 14.056 10.2188 14.056 10.5547 13.8321L15.5547 10.4987C16.0142 10.1924 16.1384 9.5715 15.8321 9.11197C15.5257 8.65244 14.9048 8.52826 14.4453 8.83462L10 11.7981L5.5547 8.83462Z" fill="#4A5568"/>'
    return createElement('svg', data)
  },
})
