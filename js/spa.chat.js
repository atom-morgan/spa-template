/* 
 * spa.chat.js
 * Chat feature module for SPA
*/

/*jslint           broswer : true,   continue : true,
  devel : true,    indent : 2,       maxerr : 50,
  newcap : true,   nomen : true,     plusplus : true,
  regexp : true,   sloppy : true,    vars : false,
  white : true
*/

/*global $, spa */

spa.chat = (function() {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      main_html: String()
        + '<div id="spa-chat-placeholder">'
          + 'Say hello to chat'
        + '</div>',
      settable_map: {}
    },
    stateMap = { $container: null },
    jqueryMap = {},

    setJqueryMap, configModule, initModule;
  //----------------- END MODULE SCOPE VARIABLES ---------------
  //------------------- BEGIN UTILITY METHODS ------------------
  //-------------------- END UTILITY METHODS -------------------
  //--------------------- BEGIN DOM METHODS --------------------
  setJqueryMap = function() {
    var $container = stateMap.$container;
    jqueryMap = { $container: $container };
  };
  //---------------------- END DOM METHODS ---------------------
  //------------------- BEGIN EVENT HANDLERS -------------------
  //-------------------- END EVENT HANDLERS --------------------
  //------------------- BEGIN PUBLIC METHODS -------------------
  // Purpose: Adjust configuration of allowed keys
  // Arguments: A map of settable keys and values
  //  * color_name: The color to use ------------------WTF?
  // Settings:
  //  * configMap.settable_map declares allowed keys
  // Returns: true
  // Throws: none
  configModule = function (input_map) {
    spa.util.setConfigMap({
      input_map: input_map,
      settable_map: configMap.settable_map,
      config_map: configMap
    });
    return true;
  };

  initModule = function ($container) {
    $container.html(configMap.main_html);
    stateMap.$container = $container;
    setJqueryMap();
    return true; 
  };

  return {
    configModule: configModule,
    initModule: initModule
  };
  //------------------- END PUBLIC METHODS ---------------------
})();