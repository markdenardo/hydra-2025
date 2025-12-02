
await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-fractals.js")

//await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-outputs.js")

//oS.setLinear()

src(o0)
	.scale(.075)
	.add(osc(2,1,10),.4)
	.invert()
	.inversion()
	.mirrorX2()
	.blend(o0,.3)
	.out()

