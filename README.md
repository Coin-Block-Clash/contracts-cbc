# Coin Block Clash 

 - [Coin Block Clash]()

 - `Pool` Contracts

------------------------------------------------------------------------------------------

# Install dep for Hardhat and run 

- `npm i`

#### Deploy Contracts

```shell
npx hardhat run --network arbitrumSepolia path/to/the/script

```

#### Verify Contracts

```shell
npx hardhat verify --network arbitrumSepolia DEPLOYED_CONTRACT_ADDRESS 
```

----------------------------------------------------------------------------------------

# Install dep for Foundry and run 

#### Step 1


```shell
mkdir lib 
```

```shell
cd lib 
```

```shell
git clone https://github.com/foundry-rs/forge-std.git
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

