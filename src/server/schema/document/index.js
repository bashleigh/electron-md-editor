import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'document',
    description: 'documents',
    fields: () => ({
        id: {
            type: (GraphQLInt),
            description: 'The id of the user.',
        },
        title: {
            type: GraphQLString,
            description: 'The title of the document.',
        },
        content: {
            type: GraphQLString,
            description: 'The content of the document.',
        },
        // author: {
        //     type: GraphQLObjectType,
        //     description: 'The author of the document.',
        // },
    }),
});