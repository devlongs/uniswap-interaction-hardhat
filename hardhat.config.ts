import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { network } from "hardhat";


const config: HardhatUserConfig = {
  solidity: "0.8.9",

  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/3YrcgwycZ0vi8HGXjNQVIkaeVL7-n497",
        //@ts-ignore
        // blockGasLimit: 200000000000,
        // gasPrice: 80000000000,
      }
    },
  }
};

export default config;
