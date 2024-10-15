// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyBusinessToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyBusinessToken", "MBT") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
}
