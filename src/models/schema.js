export const schema = {
    "models": {
        "WebCrawl": {
            "name": "WebCrawl",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "url": {
                    "name": "url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "dateTime": {
                    "name": "dateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "domainID": {
                    "name": "domainID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "custom": {
                    "name": "custom",
                    "isArray": false,
                    "type": {
                        "nonModel": "WebResult"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nu": {
                    "name": "nu",
                    "isArray": false,
                    "type": {
                        "nonModel": "WebResult"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "lighthouse": {
                    "name": "lighthouse",
                    "isArray": false,
                    "type": {
                        "nonModel": "WebResult"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "WebCrawls",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDomain",
                        "fields": [
                            "domainID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ],
                                "identityClaim": "cognito:username"
                            }
                        ]
                    }
                }
            ]
        },
        "EngineCrawl": {
            "name": "EngineCrawl",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "dateTime": {
                    "name": "dateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "search": {
                    "name": "search",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "domainID": {
                    "name": "domainID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "zipCode": {
                    "name": "zipCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "keywordPlanner": {
                    "name": "keywordPlanner",
                    "isArray": false,
                    "type": {
                        "nonModel": "EngineResult"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "google": {
                    "name": "google",
                    "isArray": false,
                    "type": {
                        "nonModel": "EngineResult"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "foursquare": {
                    "name": "foursquare",
                    "isArray": false,
                    "type": {
                        "nonModel": "EngineResult"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "facebook": {
                    "name": "facebook",
                    "isArray": false,
                    "type": {
                        "nonModel": "EngineResult"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "yelp": {
                    "name": "yelp",
                    "isArray": false,
                    "type": {
                        "nonModel": "EngineResult"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "infogroup": {
                    "name": "infogroup",
                    "isArray": false,
                    "type": {
                        "nonModel": "EngineResult"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "yellowPages": {
                    "name": "yellowPages",
                    "isArray": false,
                    "type": {
                        "nonModel": "EngineResult"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EngineCrawls",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDomain",
                        "fields": [
                            "domainID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ],
                                "identityClaim": "cognito:username"
                            }
                        ]
                    }
                }
            ]
        },
        "Domain": {
            "name": "Domain",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "EngineCrawls": {
                    "name": "EngineCrawls",
                    "isArray": true,
                    "type": {
                        "model": "EngineCrawl"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "domainID"
                    }
                },
                "WebCrawls": {
                    "name": "WebCrawls",
                    "isArray": true,
                    "type": {
                        "model": "WebCrawl"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "domainID"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Domains",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ],
                                "identityClaim": "cognito:username"
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Webcrawlers": {
            "name": "Webcrawlers",
            "values": [
                "NU",
                "LIGHTHOUSE",
                "CUSTOM"
            ]
        },
        "Enginecrawlers": {
            "name": "Enginecrawlers",
            "values": [
                "KEYWORD_PLANNER",
                "GOOGLE",
                "FOURSQUARE",
                "FACEBOOK",
                "YELP",
                "INFOGROUP",
                "YELLOW_PAGES"
            ]
        }
    },
    "nonModels": {
        "WebResult": {
            "name": "WebResult",
            "fields": {
                "data": {
                    "name": "data",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "Webcrawlers"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "unstructured": {
                    "name": "unstructured",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "EngineResult": {
            "name": "EngineResult",
            "fields": {
                "data": {
                    "name": "data",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "jsonPathToRecord": {
                    "name": "jsonPathToRecord",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rank": {
                    "name": "rank",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "totalResults": {
                    "name": "totalResults",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "Enginecrawlers"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "0601393f212868a7ecabb1ad973553f9"
};