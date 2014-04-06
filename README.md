ChechuAccordion
================================

**Zepto and jQuery Plugin: ChechuAccordion offers and easy way of displaying html content with css transitions**

Options :
---------

> **effect**        : 'slideDown';   // slideUp, slideDown, rotate

> **slideTime** : 1.5 // Time in seconds
>
> **hideAllPanels** : true/false    //  if true, all panels will be closed at each click except the current  one.
>
> **loaderImg**     : true/false

HTML:

      <section id="js">
        <p>Example with "rotate" effect, single panels and without the loader image.
        <span>
          $('#homeAccordion3').ChechuAccordion({effect: 'rotate',slideTime:1.0, hideAllPanels:true, loaderImg: true});
         </span>
        </p>
        <div id="homeAccordion3">
          <div class="accordion">
            <h2>CONTENT 1 <span>+</span></h2>
            <div class="content">Content 1 : <br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sed, architecto, autem tempora laborum quam error distinctio corporis repellat quod sequi praesentium
              voluptatibus accusantium quas. Veniam, nobis quae explicabo harum. Numquam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptates, suscipit, qui nisi labore temporibus ratione accusantium ducimus
              et ipsa blanditiis ad placeat laudantium veniam consectetur beatae quae molestias fuga veritatis. Lorem ipsum
              olor sit amet, consectetur adipisicing elit. Nemo, accusamus, voluptas quia atque ipsum fugiat rerum impedit
              ducimus error fuga earum ea reprehenderit? Ab, rem iusto quod voluptatum! Corporis, dolores. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Eveniet, esse modi consequuntur incidunt voluptatibus in quisquam similique
              quasi beatae doloremque. Adipisci, perferendis nesciunt aut unde dolores aspernatur corrupti quaerat ducimus.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, non, quos aut amet mollitia aliquid
              tempore consequuntur expedita repellendus tenetur vel delectus dolorem dolores sapiente maiores iusto dicta minima eaque?
            </div>
          </div>
          <div class="accordion">
            <h2>CONTENT 2<span>+</span></h2>
            <div class="content">Content 2 : <br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sed, architecto, autem tempora laborum quam error distinctio corporis repellat quod sequi praesentium
              voluptatibus accusantium quas. Veniam, nobis quae explicabo harum. Numquam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptates, suscipit, qui nisi labore temporibus ratione accusantium ducimus
              et ipsa blanditiis ad placeat laudantium veniam consectetur beatae quae molestias fuga veritatis. Lorem ipsum
              olor sit amet, consectetur adipisicing elit. Nemo, accusamus, voluptas quia atque ipsum fugiat rerum impedit
              ducimus error fuga earum ea reprehenderit? Ab, rem iusto quod voluptatum! Corporis, dolores. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Eveniet, esse modi consequuntur incidunt voluptatibus in quisquam similique
              quasi beatae doloremque. Adipisci, perferendis nesciunt aut unde dolores aspernatur corrupti quaerat ducimus.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, non, quos aut amet mollitia aliquid
              tempore consequuntur expedita repellendus tenetur vel delectus dolorem dolores sapiente maiores iusto dicta
              minima eaque?

            </div>
          </div>
          <div class="accordion">
            <h2>CONTENT 3 <span>+</span></h2>
            <div class="content">Content 3 : <br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sed, architecto, autem tempora laborum quam error distinctio corporis repellat quod sequi praesentium
              voluptatibus accusantium quas. Veniam, nobis quae explicabo harum. Numquam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptates, suscipit, qui nisi labore temporibus ratione accusantium ducimus
              et ipsa blanditiis ad placeat laudantium veniam consectetur beatae quae molestias fuga veritatis. Lorem ipsum
              olor sit amet, consectetur adipisicing elit. Nemo, accusamus, voluptas quia atque ipsum fugiat rerum impedit
              ducimus error fuga earum ea reprehenderit? Ab, rem iusto quod voluptatum! Corporis, dolores. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Eveniet, esse modi consequuntur incidunt voluptatibus in quisquam similique
              quasi beatae doloremque. Adipisci, perferendis nesciunt aut unde dolores aspernatur corrupti quaerat ducimus.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, non, quos aut amet mollitia aliquid
              tempore consequuntur expedita repellendus tenetur vel delectus dolorem dolores sapiente maiores iusto dicta
              minima eaque?
            </div>
          </div>
        </div>
      </section>

JavaScript:

    $(document).ready(function() {
    $('#homeAccordion').ChechuAccordion({
            effect: 'slideDown',
            slideTime:1.0,
            hideAllPanels:true,
            loaderImg: true
        });
    });

