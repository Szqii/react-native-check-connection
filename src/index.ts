import NetInfo, { NetInfoState } from "@react-native-community/netinfo"

export const waitInternetConnection = async () => {
  const connectivityResult = await NetInfo.fetch()

  if (connectivityResult.isConnected && connectivityResult.isInternetReachable) {
    return
  }

  await new Promise(resolve => {
    NetInfo.addEventListener((state: NetInfoState) => {
      if (state.isConnected && state.isInternetReachable) {
        resolve(true)
      }
    })
  })
}

