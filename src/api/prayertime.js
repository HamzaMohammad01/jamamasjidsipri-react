import apiClient from "./client";

const endpoint = "salah";
const getSalah = () => {
	return apiClient.get(endpoint);
};

const updateSalah = async (data, onUploadProgress, authToken) => {
	return await apiClient.patch(endpoint + "/6651fff09eff5710e11b5739", data, {
		onUploadProgress: (progress) =>
			onUploadProgress(progress.loaded / progress.total),

		headers: { "x-auth-token": authToken },
	});
};

export { getSalah, updateSalah };
