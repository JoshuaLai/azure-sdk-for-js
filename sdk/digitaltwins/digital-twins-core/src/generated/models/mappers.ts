/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const DigitalTwinsModelData: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DigitalTwinsModelData",
    modelProperties: {
      displayName: {
        serializedName: "displayName",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      uploadTime: {
        serializedName: "uploadTime",
        type: {
          name: "DateTime"
        }
      },
      decommissioned: {
        serializedName: "decommissioned",
        type: {
          name: "Boolean"
        }
      },
      model: {
        serializedName: "model",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ErrorResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const ErrorModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ErrorModel" } }
        }
      },
      innererror: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "InnerError"
        }
      }
    }
  }
};

export const InnerError: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InnerError",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      innererror: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "InnerError"
        }
      }
    }
  }
};

export const PagedDigitalTwinsModelDataCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PagedDigitalTwinsModelDataCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "DigitalTwinsModelData" }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QuerySpecification: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuerySpecification",
    modelProperties: {
      query: {
        serializedName: "query",
        type: {
          name: "String"
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueryResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: { type: { name: "any" } }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RelationshipCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RelationshipCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: { type: { name: "any" } }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IncomingRelationshipCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IncomingRelationshipCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "IncomingRelationship" }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IncomingRelationship: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IncomingRelationship",
    modelProperties: {
      relationshipId: {
        serializedName: "$relationshipId",
        type: {
          name: "String"
        }
      },
      sourceId: {
        serializedName: "$sourceId",
        type: {
          name: "String"
        }
      },
      relationshipName: {
        serializedName: "$relationshipName",
        type: {
          name: "String"
        }
      },
      relationshipLink: {
        serializedName: "$relationshipLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventRouteCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EventRouteCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "EventRoute" } }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventRoute: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EventRoute",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      endpointName: {
        serializedName: "endpointName",
        required: true,
        type: {
          name: "String"
        }
      },
      filter: {
        serializedName: "filter",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueryQueryTwinsHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryQueryTwinsHeaders",
    modelProperties: {
      queryCharge: {
        serializedName: "query-charge",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DigitalTwinsGetByIdHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DigitalTwinsGetByIdHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DigitalTwinsAddHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DigitalTwinsAddHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DigitalTwinsUpdateHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DigitalTwinsUpdateHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DigitalTwinsGetRelationshipByIdHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DigitalTwinsGetRelationshipByIdHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DigitalTwinsAddRelationshipHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DigitalTwinsAddRelationshipHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DigitalTwinsUpdateRelationshipHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DigitalTwinsUpdateRelationshipHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DigitalTwinsGetComponentHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DigitalTwinsGetComponentHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DigitalTwinsUpdateComponentHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DigitalTwinsUpdateComponentHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};
