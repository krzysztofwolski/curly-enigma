import { createPrivateKey } from 'crypto'
import { request } from 'http'
import { NextApiRequest, NextApiResponse } from 'next'
import {version, name, description} from '../../../package.json'
import { configurationUrl, dataPrivacyUrl, getAbsoluteUrl, homepageUrl, registerUrl, supportUrl } from '../../utils/routeUrls'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {

    const manifest = {
    "id": "i18n.saleor.app",
    "version": version,
    "name": name,
    "about": description,

    "permissions": ["MANAGE_USERS", "MANAGE_STAFF"],

    "appUrl": "http://localhost:3000/app",  // TODO: whats the appURL?
    "configurationUrl": getAbsoluteUrl(configurationUrl),
    "tokenTargetUrl": getAbsoluteUrl(registerUrl),

    "dataPrivacy": `You can check Data Privacy terms on ${getAbsoluteUrl(dataPrivacyUrl)}`,
    "dataPrivacyUrl": getAbsoluteUrl(dataPrivacyUrl),
    "homepageUrl": getAbsoluteUrl(homepageUrl),
    "supportUrl": getAbsoluteUrl(supportUrl)
    }
    // res.statusCode = 200;
    res.end(JSON.stringify(manifest));
}

export default handler
