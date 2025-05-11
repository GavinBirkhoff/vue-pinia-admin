import CryptoJS from 'crypto-js'
const aseKey = '0123456789abcdef'
const iv = 'abcdef0123456789'
const key = CryptoJS.enc.Utf8.parse(aseKey)
const ivs = CryptoJS.enc.Utf8.parse(iv)

// 加密
export function encrypt(data: any) {
  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: ivs,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.toString()
}

// 解密
export function decrypt(data: any) {
  const decrypt = CryptoJS.AES.decrypt(data, key, {
    iv: ivs,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return CryptoJS.enc.Utf8.stringify(decrypt).toString()
}

export default {
  encrypt,
  decrypt,
}
