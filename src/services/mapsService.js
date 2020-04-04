import { Loader } from 'google-maps';
import configService from './config'


const loaderMapService = new Loader(configService.token, { language: "en"});

export default loaderMapService;