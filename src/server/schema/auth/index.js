import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'auth',
    description: 'Authentication',
    fields: () => ({
        email: {
            type: GraphQLString,
            description: 'The email address of the user',
        },
        password: {
            type: GraphQLString,
            description: 'The password of the user',
        },
    }),
});