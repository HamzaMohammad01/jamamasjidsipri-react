import { create } from "apisauce";

const apiClient = create({
	baseURL: "https://salahtime-backend.onrender.com/api/",
});

export default apiClient;
