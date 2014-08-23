/* ========================================================================
 * jQuery Bootstrap dropdown extension: dropdown.js v0.1
 * http://www.github.com/raulriera
 * ========================================================================
 * Copyright 2014 Raul Riera.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

(function($) {

    $.fn.dropdown = function( options ) {

      var defaults = $.extend({
          onChange: null
      }, options );

      var dropdown = this;

      dropdown.on("click", "li", function(event) {
        var row = $(this);
        var selectedRow = row.index();
        var selectedObject = $(dropdown.find("ul").children()[selectedRow]);

        selectedValue(selectedObject.text());

        if (defaults.onChange) {
          var data = { "index": selectedRow };
          var anchor = selectedObject.children()[0];
          var dataAttributeValue = $(anchor).data('value');

          if (dataAttributeValue) {
            data.value = dataAttributeValue;
          } else {
            data.value =  selectedObject.text();
          }

          defaults.onChange(data);
        }

        event.preventDefault();
      });

      function selectedValue(text) {
        dropdown.find("button").html(text.concat(" ", bootstrapCaret()));
      }

      function bootstrapCaret() {
        return "<span class='caret'></span>";
      }

    return this;

  };
}( jQuery ));
