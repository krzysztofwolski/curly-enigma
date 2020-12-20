import { APP_DOMAIN } from "./constants"

export const configurationUrl = '/configuration'
export const manifestUrl = '/api/manifest'
export const registerUrl = '/api/register'
export const dataPrivacyUrl = '/data-privacy'
export const homepageUrl = '/'
export const supportUrl = '/'

export const getAbsoluteUrl = (url: string): string => {
    // TODO: tests and check if dev server is handled properly (also - SSR!)
    const absoluteUrl = new URL(`.${url}`, APP_DOMAIN)
    return absoluteUrl.href
}