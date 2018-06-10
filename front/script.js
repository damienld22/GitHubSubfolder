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
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", output.link, false);
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

	return { success, result, link };
};
