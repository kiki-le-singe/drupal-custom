/*
 * @file
 *
 * Description.
 */

(function($) {

    Drupal.theme.prototype.linkAddBundle = function(i) {
        return '<div class="link-add-bundle"><a class="ctools-use-modal ctools-use-modal-processed" href="/modal_bundle_add/nojs/add">' + Drupal.t('Add content') + '</a></div>';
    }
    
    /**
    * Description.
    */
    Drupal.behaviors.linkAddBundle = {
        attach: function() {
            var elementsEntityReference = $(".node-form .field-type-entityreference");
            
            if (elementsEntityReference.length) {

                $.each(elementsEntityReference, function(i, val) {
                    console.log(i);
                    $(this).append(Drupal.theme('linkAddBundle', i));
                });
            }
        }
    };

})(jQuery);
