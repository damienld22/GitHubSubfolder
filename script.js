const inputOwner = document.getElementById("inputOwner");
const inputRepository = document.getElementById("inputRepository");
const inputPath = document.getElementById("inputPath");
const generatedCurlCmd = document.getElementById("generatedCurlCmd");

/**
 * Generate the curl command to launch to get the proper subfolder
 */
generateCurlCommand = () => {
	const output = generateURL();
	generatedCurlCmd.textContent = output.result;
};

/**
 * Download in the browser the subfolder as a zip file
 */
downloadSubfolder = () => {
	const output = generateURL();

	if (output.success) {
		generatedCurlCmd.textContent = "We are processing your request...";

		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", output.link, true);
		xmlHttp.setRequestHeader("Content-type", "application/json");
		xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");

		xmlHttp.addEventListener(
			"readystatechange",
			() => {
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
					var blob = new Blob([xmlHttp.response], {
						type: "octet/stream"
					});
					let a = document.createElement("a");
					a.style = "display: none";
					document.body.appendChild(a);
					let url = window.URL.createObjectURL(blob);
					a.href = url;
					a.download = output.name + ".zip";
					a.click();
					window.URL.revokeObjectURL(url);
				}
			},
			false
		);

		xmlHttp.responseType = "arraybuffer";
		xmlHttp.send(null);
	} else {
		generatedCurlCmd.textContent = output.result;
	}
};

/**
 * Generate URL to get the subfolder from the backend
 */
generateURL = () => {
	const owner = inputOwner.value;
	const repo = inputRepository.value;
	const path = inputPath.value;
	const splitPath = path.split("/");
	const nameOutput = path.length > 0 ? splitPath[splitPath.length - 1] : repo;

	let result;
	let success;
	let link;
	if (owner.length > 0 && repo.length > 0) {
		success = true;
		link = `http://localhost:8080/?owner=${owner}&repository=${repo}&path=${path}`;
		result = `curl -X GET '${link}' --output ${nameOutput}.zip`;
	} else {
		success = false;
		link = null;
		result = "Any property is missing, check the owner or the repository";
	}

	return { success, result, link, name: nameOutput };
};
