import { jwtDecode } from "jwt-decode";

export default function decodetoken() {
    let token = JSON.parse(localStorage.getItem('token'))
    let res = jwtDecode(token)
    return { name: res.name, id: res.id }
}