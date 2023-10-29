import Decimal from "decimal.js";
import { BigNumberish, ethers } from "ethers";
import { FC } from "react";
import { View } from "react-native";


const EtherFormatted= ({ wei }) => {
  const etherDecimalPlaces=6
  const ether = ethers.utils.formatEther(wei);
  const isRounded = ether.split(".")[1].length > etherDecimalPlaces;

  return <View>{isRounded && "~"}{new Decimal(ether).toDP(etherDecimalPlaces).toFixed()}</View>;
};

export default EtherFormatted;