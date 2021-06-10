import VFSAuth from 'vfs-msal-auth'
import LocalStorageUtil from '../localstorage/localstorage.util'

export const msalAcquireTokenSilent = async () => {
  const { token, account, idToken } = await VFSAuth.signIn()
  LocalStorageUtil.setAccessToken(token)
  LocalStorageUtil.setAccount(account)
  return { account, idToken }
}

export const msalLogout = async (homeAccountId) => {
  LocalStorageUtil.removeAccessToken()
  await VFSAuth.signOut(homeAccountId, window.origin)
}

