export const helper = (ctx, w, h, lw, lc) => {
  ctx.lineWidth = lw
  ctx.strokeStyle = lc;
  for (let i = 0; i <= w; i+=10) {
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, h)
    ctx.stroke()
  }
  for (let j = 0; j <= h; j+=10) {
    ctx.beginPath()
    ctx.moveTo(0, j)
    ctx.lineTo(w, j)
    ctx.stroke()
  }
  cleanCtx(ctx)
}

export const cleanCtx = (ctx) => {
  ctx.restore()
  ctx.save()
}
