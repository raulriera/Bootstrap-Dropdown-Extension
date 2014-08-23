# Bootstrap's Dropdown Extension

Ever needed to use a Bootstrap dropdown as a normal HTML dropdown? Now you can!

## Features

- Automatically update the selected text of the dropdown
- onChange callback when an item of the list is selected
- Supports HTML5 data attributes

## How to use

All you need to do is include this jQuery plugin into your call, create a [Bootstrap dropdown](http://getbootstrap.com/components/#dropdowns) and run this

```javascript
$("#your-dropdown").dropdown({
  onChange: function(data) {
    console.log("Index: " + data.index + ", Value: " + data.value);
  }
});
```

If you need to return a value different than the text the dropdown display, simply attach an `data-value='yourvalue'` into the anchor like this

```html
<li><a role="menuitem" tabindex="-1" href="#" data-value="your real value">Display value</a></li>
```

## About:
Created by Raul Riera, [@raulriera](http://twitter.com/raulriera)
