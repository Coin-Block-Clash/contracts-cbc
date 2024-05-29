# Coin Block Clash 

 - [Coin Block Clash]()

 - `Pool` Contracts

------------------------------------------------------------------------------------------

# Install dep for Hardhat and run 

- `npm i`

#### Deploy Contracts

```shell
npx hardhat run --network <network> path/to/the/script

npx hardhat run --network arbitrumSepolia  script/hardhatScripts/deploy/deployToken.ts
```

#### Verify Contracts

```shell
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"

 npx hardhat verify --network arbitrumSepolia  
```

----------------------------------------------------------------------------------------

# Install dep for Foundry and run 

#### Step 1

```shell
cd lib git clone https://github.com/foundry-rs/forge-std.git
```

#### Step 2

```shell
forge build
```

#### To Test Contract

```shell
forge test
```

#### To Deploy and Verify 

```shell
forge create --rpc-url <RPC> \
    --private-key <KEY> \
    --etherscan-api-key <API> \
    --verify \
    contracts/contract.sol:contractNAME
```

#### To Deploy and Verify with constructor args

```shell
    forge create --rpc-url <RPC> \
    --constructor-args "--" "--" 00 00 \
    --private-key <KEY> \
    --etherscan-api-key <API> \
    --verify \
    contracts/contract.sol:contractNAME
```

