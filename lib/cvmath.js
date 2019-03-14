
  const cvs = document.createElement('canvas')
  cvs.width = 100%
  cvs.height = 100%

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.CVM = {}));
}(this, function (exports) { 'use strict';

	const helper = (ctx, w, h, lw, lc) => {
	  ctx.lineWidth = lw;
	  ctx.strokeStyle = lc;
	  for (let i = 0; i <= w; i+=10) {
	    ctx.beginPath();
	    ctx.moveTo(i, 0);
	    ctx.lineTo(i, h);
	    ctx.stroke();
	  }
	  for (let j = 0; j <= h; j+=10) {
	    ctx.beginPath();
	    ctx.moveTo(0, j);
	    ctx.lineTo(w, j);
	    ctx.stroke();
	  }
	  cleanCtx(ctx);
	};

	const cleanCtx = (ctx) => {
	  ctx.restore();
	  ctx.save();
	};

	const operation = (dom, w, h, settings) => {
	  const cvs = document.querySelector(dom);
	  const ctx = cvs.getContext('2d');
	  ctx.save();
	};

	exports.operation = operation;
	exports.helper = helper;
	exports.cleanCtx = cleanCtx;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
