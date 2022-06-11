require("@nomiclabs/hardhat-waffle");

const projectId = '0074b77ad1374245b5b583a5cb1cfafa';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`
    }
  },
  solidity: "0.8.4",
};
