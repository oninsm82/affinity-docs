define({ "api": [
  {
    "type": "get",
    "url": "/recommendations",
    "title": "Discover Connection",
    "description": "<p>Suggest any member user randomly</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Basic Authorization value.</p> "
          }
        ]
      }
    },
    "name": "connections",
    "group": "Discovery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>An id of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "used",
            "description": "<p>for data paging. it returns 50 user per page</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "object",
            "description": "<p>Returns object containint boolean value.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.rb",
    "groupTitle": "Discovery",
    "sampleRequest": [
      {
        "url": "http://affinity-engine.herokuapp.com/recommendations"
      }
    ]
  },
  {
    "type": "get",
    "url": "/recommendations",
    "title": "Discover Everyone",
    "description": "<p>Suggest any member user randomly</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Basic Authorization value.</p> "
          }
        ]
      }
    },
    "name": "recommendations",
    "group": "Discovery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>An id of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "used",
            "description": "<p>for data paging. it returns 50 user per page</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "object",
            "description": "<p>Returns object containint boolean value.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.rb",
    "groupTitle": "Discovery",
    "sampleRequest": [
      {
        "url": "http://affinity-engine.herokuapp.com/recommendations"
      }
    ]
  },
  {
    "type": "get",
    "url": "/username_exist",
    "title": "Check username",
    "description": "<p>It should store unique username only. Initially, It was created automatically upon creating user but it’s editable</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Basic Authorization value.</p> "
          }
        ]
      }
    },
    "name": "checkuser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>An id of the user</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "object",
            "description": "<p>Returns object containint boolean value.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.rb",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://affinity-engine.herokuapp.com/username_exist"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user?id=:id",
    "title": "Get user",
    "description": "<p>Get all user data stored in DB</p> ",
    "name": "getuser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>An id of the user</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "object",
            "description": "<p>Returns object containing User Data.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.rb",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://affinity-engine.herokuapp.com/user?id=:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Update user",
    "description": "<p>This will be called when updating more user details. Can be called also after questions were answered</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Basic Authorization value.</p> "
          }
        ]
      }
    },
    "name": "updateuser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "fb_user_id",
            "description": "<p>This is a user facebook ID from FB response data ex: (&quot;10103588655472742&quot;)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>a Fullname from FB response data ex:(Jay Stockwell)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>an Email Address from FB response data</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "birthday",
            "description": "<p>Facebook return this format MM/DD/YYYY but  we store like this YYYY/MM/DD ex:(1977/02/28)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "gender",
            "description": "<p>male or female</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>from Facebook data too</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lat",
            "description": "<p>Get from device (Should be updated every time user logged in)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lng",
            "description": "<p>Get from Device (Should be updated every time user logged in)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>from Facebook data too</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "photo_ur",
            "description": "<p>from Facebook data too</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>Facebook access token</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "object",
            "description": "<p>Returns object containing User Data.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.rb",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://affinity-engine.herokuapp.com/user"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create user",
    "description": "<p>This will be called after successful login via Facebook oauth. We have to store initial data. Returns User Data in JSON format</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Basic Authorization value.</p> "
          }
        ]
      }
    },
    "name": "user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "fb_user_id",
            "description": "<p>This is a user facebook ID from FB response data ex: (&quot;10103588655472742&quot;)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>a Fullname from FB response data ex:(Jay Stockwell)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>an Email Address from FB response data</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "birthday",
            "description": "<p>Facebook return this format MM/DD/YYYY but  we store like this YYYY/MM/DD ex:(1977/02/28)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "gender",
            "description": "<p>male or female</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>from Facebook data too</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lat",
            "description": "<p>Get from device (Should be updated every time user logged in)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lng",
            "description": "<p>Get from Device (Should be updated every time user logged in)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>from Facebook data too</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "photo_ur",
            "description": "<p>from Facebook data too</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>Facebook access token</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://affinity-engine.herokuapp.com/user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "object",
            "description": "<p>Returns object containing User Data.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.rb",
    "groupTitle": "User"
  }
] });