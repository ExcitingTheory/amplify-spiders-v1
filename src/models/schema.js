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
                "postalCode": {
                    "name": "postalCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "keywordplanner": {
                    "name": "keywordplanner",
                    "isArray": false,
                    "type": {
                        "nonModel": "EngineResult"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "citysearch": {
                    "name": "citysearch",
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
                "yellowpages": {
                    "name": "yellowpages",
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
    "enums": {},
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
                "parsed": {
                    "name": "parsed",
                    "isArray": false,
                    "type": "AWSJSON",
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
        "ParsedEngineResult": {
            "name": "ParsedEngineResult",
            "fields": {
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "score": {
                    "name": "score",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "websiteUrl": {
                    "name": "websiteUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Coordinate": {
            "name": "Coordinate",
            "fields": {
                "x": {
                    "name": "x",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "y": {
                    "name": "y",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "BumpChart": {
            "name": "BumpChart",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": true,
                    "type": {
                        "nonModel": "Coordinate"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "EngineResult": {
            "name": "EngineResult",
            "fields": {
                "results": {
                    "name": "results",
                    "isArray": true,
                    "type": {
                        "nonModel": "ParsedEngineResult"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "bumpChart": {
                    "name": "bumpChart",
                    "isArray": true,
                    "type": {
                        "nonModel": "BumpChart"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "highScore": {
                    "name": "highScore",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "foundWebsite": {
                    "name": "foundWebsite",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "mostLikely": {
                    "name": "mostLikely",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "exactWebsiteMatch": {
                    "name": "exactWebsiteMatch",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "exactWebsiteMatchHttp": {
                    "name": "exactWebsiteMatchHttp",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "exactNameMatch": {
                    "name": "exactNameMatch",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "697afc01b81ee423d8bb906675128062"
};