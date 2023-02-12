window.addEventListener("load", () => {
	if(!("serviceWorker" in navigator)) {
		alert("Service Worker not supported.");
	}
	navigator.serviceWorker.register("/sw.js").then(
		() => {
			alert("Service Worker Registered.");
		},
		err => {
			alert("Service Worker failed.", err)
		}
		)
})