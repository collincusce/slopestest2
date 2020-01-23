const Slopes = require("slopes");
const BinTools = require("slopes/src/utils/bintools");
const Ins = require("slopes/src/apis/avm/inputs");
const Keys = require("slopes/src/apis/avm/keychain");
const Outs = require("slopes/src/apis/avm/outputs");
const Txs = require("slopes/src/apis/avm/tx");
const Types = require("slopes/src/apis/avm/types");
const UTXOs = require("slopes/src/apis/avm/utxos");
const Buffer = require('buffer/');

let bintools = BinTools.getInstance();

let s = new Slopes("localhost", 9650);

let utxoset = new UTXOs.UTXOSet();

let u = [];

u.push(new UTXOs.UTXO());

let input = new Ins.Input();

let kp = new Keys.AVMKeyPair();

let kc = new Keys.AVMKeyChain();

let outputCA = new Outs.OutCreateAsset();

let outputPay = new Outs.OutPayment(bintools.b58ToBuffer("madeup1"));

let outputTOL = new Outs.OutTakeOrLeave(Buffer.from("madeup2", "utf8"));

let utx = new Txs.TxUnsigned();

let tx = new Txs.Tx();

let addr = new Types.Address();

let sigidx = new Types.SigIdx();

let sig = new Types.Signature();

let utc = Types.UnixNow();
