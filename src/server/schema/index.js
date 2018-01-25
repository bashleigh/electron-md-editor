import {
    GraphQLSchema,
    GraphQLString,
    GraphQLObjectType,
    GraphQLList,
    GraphQLInputObjectType,
} from 'graphql';

import {
    projection as getProjection,
} from './../helpers';

import {
    user as UserModel,
    document as DocumentModel,
} from './../db';

import userSchema from './user';
import documentSchema from './document';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => {
            return {
                users: {
                    type: new GraphQLList(userSchema),
                    resolve: async (root, params, options, fieldASTs) => {

                        const projection = getProjection(fieldASTs);
                        
                        const results = await UserModel.find()
                            .select(projection)
                            .exec();

                        return results;
                    },
                },
                documents: {
                    type: new GraphQLList(documentSchema),
                    resolve: async (root, params, options, fieldsASTs) => {

                        const projection = getProjection(fieldsASTs);

                        const results = await DocumentModel.find()
                            .select(projection)
                            .exec();

                        return results;
                    },
                },
            };
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => {
            return {
                user: {
                    type: userSchema,
                    args: {
                        input: {
                            type: new GraphQLInputObjectType({
                                name: 'UserInput',
                                description: 'Input user payload',
                                fields: () => ({
                                    firstname: {
                                        type: GraphQLString,
                                    },
                                    lastname: {
                                        type: GraphQLString,
                                    },
                                    email: {
                                        type: GraphQLString,
                                    },
                                    password: {
                                        type: GraphQLString,
                                    },
                                }),
                            }),
                        },
                    },
                    resolve: async (root, params, options, fieldASTs) => {

                        const user = new UserModel({
                            firstname: params.input.firstname,
                            lastname: params.input.lastname,
                        });

                        user.save();

                        return user;
                    },
                },
                document: {
                    type: documentSchema,
                    args: {
                        input: {
                            type: new GraphQLInputObjectType({
                                name: 'DocumentInput',
                                description: 'Input document payload',
                                fields: () => ({
                                    title: {
                                        type: GraphQLString,
                                    },
                                    content: {
                                        type: GraphQLString,
                                    },
                                }),
                            }),
                        },
                    },
                    resolve: async (root, params, options, fieldASTs) => {

                        const document = new DocumentModel({
                            title: params.input.title,
                            content: params.input.content,
                            //TODO get the author ID from the current loggedin user
                        });

                        document.save();

                        return document;
                    },
                },
            };
        },
    }),
});