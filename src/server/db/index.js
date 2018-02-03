import connection from './connection';
import {
    documentModel,
} from './model';

const document = documentModel(connection);

export {
    document,
};
export default connection;
