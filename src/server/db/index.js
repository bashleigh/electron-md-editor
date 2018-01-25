import connection from './connection';
import {
    userModel,
    documentModel,
} from './model';

const user = userModel(connection);
const document = documentModel(connection);

export {
    user,
    document,
};
export default connection;
