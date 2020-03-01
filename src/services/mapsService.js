import { Loader } from 'google-maps';
import configService from './config'

const loaderMapService = new Loader(configService.token);

export default loaderMapService;