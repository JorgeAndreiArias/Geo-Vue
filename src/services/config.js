var serviceAccount = require("../keys/serviceKeyGoogleMaps.json");

const configService = {
    token: serviceAccount.token
};

console.warn(configService);
export default configService;
