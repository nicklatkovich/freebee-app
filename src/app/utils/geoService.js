import * as api from '../constants/api'

export default function getNear(lat, lng) {
  return fetch(`${api.api}/marker/near/${lat}/${lng}`, {
    mode: 'cors',
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => {
    if (res.status !== 200) {
      console.log(res.status + ' '+ res.statusText)
      return;
    }
    return res.json()
  })
  .then(data => {
    return data
  })
}