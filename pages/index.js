"use strict";
exports.__esModule = true;
var web3 = require("@solana/web3.js");
var react_1 = require("react");
var Home_module_css_1 = require("../styles/Home.module.css");
var AddressForm_1 = require("../components/AddressForm");
var Home = function () {
    var _a = (0, react_1.useState)(0), balance = _a[0], setBalance = _a[1];
    var _b = (0, react_1.useState)(''), address = _b[0], setAddress = _b[1];
    var addressSubmittedHandler = function (address) {
        try {
            setAddress(address);
            var key = new web3.PublicKey(address);
            var connection = new web3.Connection(web3.clusterApiUrl('devnet'));
            connection.getBalance(key).then(function (balance) {
                setBalance(balance / web3.LAMPORTS_PER_SOL);
            });
        }
        catch (error) {
            setAddress('');
            setBalance(0);
            alert(error);
        }
    };
    return (<div className={Home_module_css_1["default"].App}>
      <header className={Home_module_css_1["default"].AppHeader}>
        <p>
          Start Your Solana Journey
        </p>
        <AddressForm_1["default"] handler={addressSubmittedHandler}/>
        <p>{"Address: ".concat(address)}</p>
        <p>{"Balance: ".concat(balance, " SOL")}</p>
      </header>
    </div>);
};
exports["default"] = Home;
