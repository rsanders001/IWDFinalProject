const settings = {
  "name": "iwd-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "my-first-theme"

    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://rsanders9.bitlampsites.com/wpd/FinalProject/wordpress",
          "postTypes": [
            {
              type: "book",
              endpoint: "book",
              archive: "/book"
            },
            {
              type: "review",
              endpoint: "review",
              archive: "/review"
            }
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]

};

export default settings;
