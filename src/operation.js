import { helper, cleanCtx } from './tools'

const operation = (dom, w, h, settings) => {
  const cvs = document.querySelector(dom)
  const ctx = cvs.getContext('2d')
  ctx.save()
}

export { operation }
