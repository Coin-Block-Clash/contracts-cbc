import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-foundry";
import dotenv from "dotenv";
dotenv.config();


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10,
        details: {
          constantOptimizer: true,
        },
      },
    },
  },
  networks: {
    arbitrumSepolia: {
      url: process.env.ARBSEP_RPC_URL,
      chainId: 421614,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: {
      arbitrumSepolia: process.env.ARB_API_KEY || "", 
    }
},
  sourcify: {
    enabled: true
  }
};

export default config;
