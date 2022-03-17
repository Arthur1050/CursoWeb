const res = await fetch("https://libretranslate.com/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "Teste",
		source: "en",
		target: "pt"
	}),
	headers: { "Content-Type": "application/json" }
})

console.log(await res.json())