ChechuAccordion
================================


**Zepto or jQuery Plugin: ChechuAccordion offers and easy way of displaying html content with nice css transitions**

Options :
---------
```
effect    : 'slideDown';   // slideUp, slideDown or rotate
slideTime : 1.5            // Time in seconds
hideAllPanels : true/false // All panels will be closed at each click except the current  one
loaderImg     : true/false // Show or hide loader image
```
JavaScript (Plugin call) :
---------

```
$('#homeAccordion').ChechuAccordion({
    effect: 'slideDown',
    slideTime:1.0,
    hideAllPanels:true,
    loaderImg: true
});
```
Basic html usage:
---------
```
    <div id="homeAccordion">
      <div class="accordion">
        <h2>CONTENT 1 <span>+</span></h2>
        <div class="content">Content 1 : <br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sed, architecto, autem tempora laborum quam error distinctio corporis
          repellat quod sequi praesentium
          voluptatibus accusantium quas. Veniam, nobis quae explicabo harum. Numquam.
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Voluptates, suscipit, qui nisi labore
          temporibus ratione accusantium ducimus
        </div>
      </div>
    </div>
```
![enter image description here][1]


  [1]: http://www.digitatis.com/imagenes/accordion.jpg
