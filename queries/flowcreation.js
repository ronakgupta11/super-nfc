export const FLOW_QUERY = `query FLOW_QUERY {
    flowUpdatedEvents(where: {sender: "0xdcb45e4f6762c3d7c61a00e96fb94adb7cf27721"}) {
      timestamp
      token
          type
      totalSenderFlowRate
          totalAmountStreamedUntilTimestamp
          stream {
            streamedUntilUpdatedAt
          }
    }
  }`