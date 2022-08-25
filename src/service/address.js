import axios from '@/utils/axios'

export function addAddress(params) {
  return axios.post('/address', params)
}

export function editAddress(params) {
  return axios.put('/address', params)
}

export function deleteAddress(id) {
  return axios.delete(`/address/${id}`)
}

export function getDefaultAddress() {
  return axios.get('/address/default')
}

export function getAddressList() {
  return axios.get('/address')
}

export function getAddressDetail(id) {
  return axios.get(`/address/${id}`)
}