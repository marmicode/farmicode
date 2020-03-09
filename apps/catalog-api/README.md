# Generate animal data

Sheep data is generated with https://www.json-generator.com/ using this configuration.

```
[
  '{{repeat(20, 20)}}',
  {
    id: '{{objectId()}}',
    type: 'sheep',
    birthDate: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ssZ")}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    gender: '{{gender()}}',
    name: '{{firstName()}}',
    pictureUri: '/assets/sheep-{{index()}}.jpg',
    destinations: function (tags) {
      var destinations = [['kebab'], ['wool'], ['kebab', 'wool']];
      return destinations[tags.integer(0, destinations.length - 1)];
    }
  }
]
```
