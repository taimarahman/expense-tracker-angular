
// const host =  'http://192.168.0.104';
const host =  'http://localhost';
const port = ':8080';
const url = '/api';

const basePath: string = host + port + url;
// export const environment = {
//     baseUrl: 'http://192.168.0.104:8080/api'
// }

export const environment = {
    production      : false,
    appName         : 'Project Angular',
    envName         : 'local',
    defaultLanguage : 'en',
    apiBaseUrl      : basePath,
} ;
