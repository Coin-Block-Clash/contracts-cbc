// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.24;

import {Script} from "../../../lib/forge-std/src/Script.sol";
import {console} from "../../../lib/forge-std/src/console.sol";
import  "../../../contracts/Counter.sol";

contract CounterDeploy is Script {
    function run() external {
        //add private key to wallet from .env
        uint privateKey = vm.envUint("PRIVATE_KEY");
        address account = vm.addr(privateKey);
        // to console log the account
        console.log("Account", account);
        // deploy contract
        vm.startBroadcast(privateKey);
         

        //Stop
        vm.stopBroadcast();
    }
}
