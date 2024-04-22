import {environment} from "../../environments/environment";


const ip = environment.apiIp
export const AppApi = {
  publicApi : `${ip}/public/api/v1`,
  protectedApi:`${ip}/protected/api/v1`,
  fileDownload: `${ip}/api/v1/public/file/download/`
}
