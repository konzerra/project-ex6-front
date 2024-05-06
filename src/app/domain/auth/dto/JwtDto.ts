import {User} from "../../user/User";


export interface JwtDto {
  token:string,
  user:User
}
