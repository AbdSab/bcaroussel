# Js caroussel for bootstrap
## How to use
In this actual version, you will only need a json data of images and link:
```js
const data = [
    {
        "image":"image_link",
        "link":"link"
    }
]
```
To use the caroussel you simply need to add the caroussel.js script and the caroussel.css to your html file, make sure to have bootstrap 4 included too.
Then add an empty div tag with the class you want:
```html
<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="caroussel.css">
</head>
<body>

    <div class="caroussel"></div>
        
      <script src="caroussel.js"></script>
      <script>
        var data = []; // The json data.
        caroussel({
            CLASS:"caroussel"
        },data);
      </script>
</body>
</html>
```

### TODO LIST
1. Refactor code
2. Custom html
3. Custom parameters (Animations, nbr of elements ...)