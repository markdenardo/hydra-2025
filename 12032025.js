






























										// WaveForm Vinyasa
											// Angela Wang + MDN
												// DAYA YOGA RIDGEWOOOD
													// SUN 12/14 12:30 PM












































await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-fractals.js")

f=()=>a.fft[0]

src(o0)
	.scale(.075)
	.add(osc(2,1,10),.4).modulateScrollX(osc(111))
	.invert()
	.inversion()
	.mirrorX2()
	.blend(o0,.3)
	.out(o0)

src(o0)
	.scale(.075)
	.add(osc(2,1,10),.4).modulateScrollX(osc(1,1,1))
	.invert()
	.inversion()
	.mirrorX2(1)
	.blend(o0,.3)
	.out(o1)

src(o1)
	.scale(.075)
	.add(osc(2,1,1),.4).modulateScrollX(osc(1,1,1))
	.invert()
	.inversion()
	.mirrorX2()
	.blend(o0,.3)
	.out(o2)

render(o2)
