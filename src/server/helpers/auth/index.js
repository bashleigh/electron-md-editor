import {
    AuthenticationClient,
} from 'auth0';

const auth = new AuthenticationClient({
    domain: process.env.SERVER_AUTH0_DOMAIN,
    clientID: process.env.SERVER_AUTH0_CLIENTID,
    clientSecret: process.env.SERVER_AUTH0_SECRET,

});

export async function signUp (email, password, meta = {}) {

    return await auth.database.signUp({
        connection: 'Username-Password-Authentication',
        email: email,
        password: password,
        user_metadata: meta,
    });

};

export async function login (email, password) {

    return await auth.database.signIn({
        connection: 'Username-Password-Authentication',
        username: email,
        password: password,
    }, (error, user) => {
        if (error) console.error(error);

        console.log('user', user);

        return user;
    });
};

export async function getMe (id) {

}