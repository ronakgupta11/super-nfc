import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import {BigNumber, BigNumberish, utils, ethers} from 'ethers';
import Decimal from 'decimal.js';

const ANIMATION_MINIMUM_STEP_TIME = 75;

const BalanceComp = ({balance, flowRate,balanceTimestamp}) => {
  const [celoValue, setCeloValue] = useState(balance);
  useEffect(() => setCeloValue(balance), [balance]);
  const flowRateBigNumber = useMemo(() => BigNumber.from(flowRate), [flowRate]);
  
  const currentEtherDecimalPlaces=6
  const etherSignificantFlowingDecimal = useMemo(() => {
    if (flowRateBigNumber.isZero()) {
      return undefined;
    }
    const ticksPerSecond = 1000 / ANIMATION_MINIMUM_STEP_TIME;
    const flowRatePerTick = new Decimal(flowRate)
      .div(ticksPerSecond)
      .toFixed(0);

    const afterEtherDecimal = utils.formatEther(flowRatePerTick).split('.')[1];
    const numberAfterDecimalWithoutLeadingZeroes = Number(afterEtherDecimal);
    const lengthToFirstSignificatDecimal = afterEtherDecimal
      .toString()
      .replace(numberAfterDecimalWithoutLeadingZeroes.toString(), '').length;

    if (lengthToFirstSignificatDecimal === 17) return 18; // Don't go over 18.

    // This will usually have the last 3 numbers flowing smoothly.
    return lengthToFirstSignificatDecimal + 2;
  }, [flowRate, currentEtherDecimalPlaces]);

  const balanceTimestampMs = useMemo(
    () => ethers.BigNumber.from(balanceTimestamp).mul(1000),
    [balanceTimestamp],
  );

  useEffect(() => {
    const balanceBigNumber = ethers.BigNumber.from(balance);

    let stopAnimation = false;
    let lastAnimationTimestamp = 0;

    const animationStep = (currentAnimationTimestamp) => {
      if (stopAnimation) {
        return;
      }

      if (
        currentAnimationTimestamp - lastAnimationTimestamp >
        ANIMATION_MINIMUM_STEP_TIME
      ) {
        const currentTimestampBigNumber = ethers.BigNumber.from(
          new Date().valueOf() // Milliseconds elapsed since UTC epoch, disregards timezone.
        );

        setWeiValue(
          balanceBigNumber.add(
            currentTimestampBigNumber
              .sub(balanceTimestampMs)
              .mul(flowRateBigNumber)
              .div(1000)
          )
        );

        lastAnimationTimestamp = currentAnimationTimestamp;
      }

      window.requestAnimationFrame(animationStep);
    };
    return () => {
      stopAnimation = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balance, balanceTimestamp, flowRate]);

    window.requestAnimationFrame(animationStep);
  return (
    <View>
      {currentEtherDecimalPlaces !== 0 ?
        <EtherFormatted wei={weiValue} />
        :
        <Amount wei={weiValue} decimalPlaces={etherSignificantFlowingDecimal} />
      }
    </View>
  );
};

export default BalanceComp;

const styles = StyleSheet.create({});
