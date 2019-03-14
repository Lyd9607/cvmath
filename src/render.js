export default (mountDom) => {
  const cvs = document.createElement('canvas')
  cvs.width = '100%'
  cvs.height = '100%'
  const ctx = cvs.getContext('2d')
  ctx.save()

  const pdom = document.querySelector(mountDom)
  pdom.appendChild(cvs)
}
