import * as Parser from "ua-parser-js";

export function isMobile (req)  {
    let user_agent;
    if(req) {
        user_agent = Parser(req.headers['user-agent'] || " ");
    } else {
        user_agent = new Parser().getResult();
    }
    return user_agent?.device?.type === 'mobile'
}

