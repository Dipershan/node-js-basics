const qr=  require("qrcode");

const createQr =  async (url) => {
    return qr.toFile("./image.png" ,  url);
};
module.exports = {
    createQr
}

