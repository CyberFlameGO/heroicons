import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconCubeSolid',
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
    data.domProps.innerHTML = '<path d="M11 17C11 17.3466 11.1795 17.6684 11.4743 17.8507C11.7691 18.0329 12.1372 18.0494 12.4472 17.8944L16.4472 15.8944C16.786 15.725 17 15.3788 17 15V9.23607C17 8.88949 16.8205 8.56762 16.5257 8.38542C16.2309 8.20321 15.8628 8.18665 15.5528 8.34164L11.5528 10.3416C11.214 10.511 11 10.8573 11 11.2361V17Z" fill="#374151"/><path d="M15.2111 6.27639C15.5499 6.107 15.7639 5.76074 15.7639 5.38197C15.7639 5.00319 15.5499 4.65693 15.2111 4.48754L10.4472 2.10557C10.1657 1.96481 9.83431 1.96481 9.55279 2.10557L4.78885 4.48754C4.45007 4.65693 4.23607 5.00319 4.23607 5.38197C4.23607 5.76074 4.45007 6.107 4.78885 6.27639L9.55279 8.65836C9.83431 8.79912 10.1657 8.79912 10.4472 8.65836L15.2111 6.27639Z" fill="#374151"/><path d="M4.44721 8.34164C4.13723 8.18665 3.76909 8.20321 3.47427 8.38542C3.17945 8.56762 3 8.88949 3 9.23607V15C3 15.3788 3.214 15.725 3.55279 15.8944L7.55279 17.8944C7.86277 18.0494 8.23091 18.0329 8.52573 17.8507C8.82055 17.6684 9 17.3466 9 17V11.2361C9 10.8573 8.786 10.511 8.44721 10.3416L4.44721 8.34164Z" fill="#374151"/>'
    return createElement('svg', data)
  },
})
