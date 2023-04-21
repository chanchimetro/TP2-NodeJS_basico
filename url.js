import { Console } from 'console';
import url from 'url'

export function parsearUrl(adr){
    try{
        let pUrl = url.parse(adr, true);
        return {
            "host": pUrl.host,
            "pathname": pUrl.pathname,
            "parametros": pUrl.query
        }
    } catch (error) {
        console.error(error)
    }
}