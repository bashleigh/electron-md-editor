import {
    AuthenticationClient,
} from 'auth0';

const auth = new AuthenticationClient({
    domain: process.env.SERVER_AUTH0_DOMAIN,
    clientID: process.env.SERVER_AUTH0_CLIENTID,
});

export async function signUp (email, password) {

    return await auth.database.signUp({
        connection: 'Username-Password-Authentication',
        email: email,
        password: password,
    });

};