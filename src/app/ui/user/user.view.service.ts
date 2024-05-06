import {Injectable} from '@angular/core';
import {UserAddress} from "../../domain/user/UserAddress";
import {User} from "../../domain/user/User";

@Injectable({
  providedIn: 'root'
})
export class UserViewService {

  constructor() { }


  getUser():User{
    let userStr = localStorage.getItem("user")
    let user : User = {
      email: "",
      id: 0,
      name: "",
      roles: []

    }
    if (userStr == null )
      return user
    return JSON.parse(userStr)
  }
  saveAddress(address: UserAddress) {
    localStorage.setItem("userAddress", JSON.stringify(address))
  }

  getAddress(): UserAddress{
    let addressString = localStorage.getItem("userAddress")
    let address: UserAddress = {
      city: null,
      country: null,
      fullAddress: null,
      postalCode: null

    }
    if(addressString == null) {
      return  address
    }

    address = JSON.parse(addressString)
    return address

  }
}
