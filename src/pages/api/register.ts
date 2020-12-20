import { NextApiRequest, NextApiResponse } from 'next'
import { Registration } from '../../saleorApp/entities/Registration.entity';
import { SALEOR_DOMAIN_HEADER } from '../../utils/constants';
import { getOrCreateConnection } from '../../utils/database';

const  handler = async (request: NextApiRequest, res: NextApiResponse) => {
    const saleor_domain = request.headers[SALEOR_DOMAIN_HEADER]
    if(!saleor_domain){
        res.statusCode = 400;
        res.end(JSON.stringify({success: false, message: "Missing saleor domain token."}))
        return;
    }
    const auth_token = request.body?.auth_token as string;
    if(!auth_token){
        res.statusCode = 400;
        res.end(JSON.stringify({success: false, message: "Missing auth token."}))
        return
    }
    const conn = await getOrCreateConnection();
    const registrationRepo = conn.getRepository<Registration>(Registration)
    const newRegistration = new Registration()
    const domain = saleor_domain.toString()
    newRegistration.domain = domain
    newRegistration.authToken = auth_token
    await registrationRepo.insert(newRegistration)
    res.end(JSON.stringify({success: true}));
}

export default handler
