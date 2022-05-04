import backendApi from "../utils/backendApi";

class AuthService {
    constructor() {}

    async login(usuario) {
        return await backendApi.post("/login", usuario);
    }

    async registro(usuario) {
        const response = await backendApi.post("/registro", usuario);

        const userInfo = {
            accessToken: response.accessToken,
            claims: response.userToken.claims,
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
}

export default AuthService;
