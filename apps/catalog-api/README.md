# Generate animal data

Sheep data is generated with https://www.json-generator.com/ using this configuration.

```
[
  '{{repeat(20, 20)}}',
  {
    id: '{{objectId()}}',
    birthDate: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss") + "Z"}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    gender: '{{gender()}}',
    name: '{{firstName()}}',
    pictureUri: 'http://localhost:3333/pics/sheep-{{index()}}.jpg',
    destinations: function (tags) {
      var destinations = ['kebab', 'wool'];
      return destinations[tags.integer(0, destinations.length - 1)];
    },
    price: '{{floating(100, 300, 2)}}'
  }
]
```
