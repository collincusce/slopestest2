const slopes = require("slopes");

const Buffer = require('buffer/').Buffer;

let bintools = slopes.BinTools.getInstance();
console.log(bintools.copyFrom(Buffer.from("abcd", "utf8")).toString())
let utxo = new slopes.UTXO();
console.log(utxo);

let s = new slopes.Slopes("localhost", 9650);

let utxoset = new slopes.UTXOSet();

let u = [];

u.push(new slopes.UTXO());
console.log(u);

let input = new slopes.Input();
console.log(input);

let kp = new slopes.AVMKeyPair;
console.log(kp);

let kc = new slopes.AVMKeyChain();
console.log(kc);

let outputPay = new slopes.OutPayment(bintools.b58ToBuffer("madeup1"));
console.log(outputPay);

let outputTOL = new slopes.OutTakeOrLeave(Buffer.from("madeup2", "utf8"));
console.log(outputTOL);

let utx = new slopes.TxUnsigned();
console.log(utx);

let tx = new slopes.Tx();
console.log(tx);

let addr = new slopes.Address();
console.log(addr);

let sigidx = new slopes.SigIdx();
console.log(sigidx);

let sig = new slopes.Signature();
console.log(sig);

let utc = slopes.UnixNow();
console.log(utc.toNumber());

