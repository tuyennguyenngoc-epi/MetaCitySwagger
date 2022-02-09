module.exports = {
    // '/userConstruct_buy': {
    //     post: {
    //         tags: ['User construct'],
    //         description: "Buy construct",
    //         requestBody: {
    //             required: true,
    //             content: {
    //                 'application/json': {
    //                     schema: {
    //                         type: 'object',
    //                         required: ['zoneId', 'constructDef'],
    //                         properties: {
    //                             zoneId: {
    //                                 type: 'string',
    //                                 description: 'Zone id'
    //                             },
    //                             constructDef: {
    //                                 type: 'integer',
    //                                 description: 'mBuildingDef'
    //                             }
    //                         }
    //                     },
    //                 }
    //             },
    //             description: ''
    //         },
    //         responses: {
    //             '200': {
    //                 content: {
    //                     'application/json': {
    //                         // schema:{
    //                         //     $ref:'#/components/schemas/Todo'
    //                         // }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // },
    '/worldMap_getAll': {
        get: {
            tags: ['World Map'],
            description: "Get all",
            operationId: 'getAllWorldMap',
            responses: {
                '200': {
                    content: {
                        'application/json': {
                            // schema:{
                            //     $ref:'#/components/schemas/Todo'
                            // }
                        }
                    }
                }
            }
        }
    },
    '/worldMap_getByUsername': {
        get: {
            tags: ['World Map'],
            description: "Get cell by username",
            operationId: 'getCellByUsername',
            parameters: [{
                in: 'query',
                name: 'username',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'Username'
            }],
            responses: {
                '200': {
                    content: {
                        'application/json': {
                            // schema:{
                            //     $ref:'#/components/schemas/Todo'
                            // }
                        }
                    }
                }
            }
        }
    },
    '/worldMap_getByUserWallet': {
        get: {
            tags: ['World Map'],
            description: "Get cell by user wallet",
            operationId: 'getCellByUserWallet',
            parameters: [{
                in: 'query',
                name: 'userWallet',
                required: true,
                schema: {
                    type: 'string'
                },
                description: 'userWallet'
            }],
            responses: {
                '200': {
                    content: {
                        'application/json': {
                            // schema:{
                            //     $ref:'#/components/schemas/Todo'
                            // }
                        }
                    }
                }
            }
        }
    },
    '/worldMap_buyCell': {
        post: {
            tags: ['World Map'],
            description: "Buy cell",
            operationId: 'buyCell',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['idCell'],
                            properties: {
                                idCell: {
                                    type: 'integer',
                                    description: 'Cell id'
                                },
                                cellIndex: {
                                    type: 'integer',
                                    description: 'Cell index'
                                }
                            }
                        }
                    }
                },
                description: ''
            },

            responses: {
                '200': {
                    content: {
                        'application/json': {
                            // schema:{
                            //     $ref:'#/components/schemas/Todo'
                            // }
                        }
                    }
                }
            }
        }
    },
}