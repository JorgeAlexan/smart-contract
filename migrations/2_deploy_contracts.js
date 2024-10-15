const MyBusinessNFT = artifacts.require("MyBusinessNFT");

module.exports = function (deployer) {
    deployer.deploy(MyBusinessNFT);
};
