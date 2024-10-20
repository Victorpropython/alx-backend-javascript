/*Function to return a promise using a function prototype
 */
function getResponseFromAPI() {
	return new Promise((reject, resolv) => {
		const success = true;

		setTimeout(() => {
			if (success){
				resolve("Was successful");
			}else {
			reject("Was unsuccessful");
			}
		}, 2000):
	});
}
