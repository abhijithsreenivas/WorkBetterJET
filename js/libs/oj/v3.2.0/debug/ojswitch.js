/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Copyright (c) 2014-2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue'], 
       
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

 /**
 * Copyright (c) 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function () {
  /*!
   * JET Switch @VERSION
   */
  /**
   * @ojcomponent oj.ojSwitch
   * @augments oj.editableValue
   * @classdesc
   * <p>
   * Component JET Switch (ojSwitch) enhances <code class="prettyprint">input</code>
   * element and manages the selection of Boolean values.
   * </p>
   *
   * <h3 id="touch-section">
   *   Touch End User Information
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#touch-section"></a>
   * </h3>
   *
   * {@ojinclude "name":"touchDoc"}
   *
   *
   * <h3 id="keyboard-section">
   *   Keyboard End User Information
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
   * </h3>
   *
   * {@ojinclude "name":"keyboardDoc"}
   *
   *
   * <h3 id="a11y-section">
   *   Accessibility
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
   * </h3>
   *
   * <p>
   * The component is accessible; it sets and maintains the appropriate aria- attributes,
   * like aria-checked and aria-disabled.
   * </p>
   * <p>
   * It is up to the application developer to associate the label to the input component.
   * For Switch, you should put an <code class="prettyprint">id</code> on the input, and
   * then set the <code class="prettyprint">for</code> attribute on the label to be the
   * input's id.
   * </p>
   *
   * <p>See also the <a href="#styling-section">oj-focus-highlight</a> discussion.
   *
   * <h3 id="styling-section">
   *   Styling
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#styling-section"></a>
   * </h3>
   * {@ojinclude "name":"stylingDoc"}
   *
   * <h3 id="label-section">
   *   Label and Switch
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
   * </h3>
   * <p>
   * For accessibility, you should associate a label element with the input by putting an
   * <code class="prettyprint">id</code> on the input, and then setting the
   * <code class="prettyprint">for</code> attribute on the label to be the input's id.
   * </p>
   * <h3 id="state-section">
   *   Setting the Value Option
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#state-section"></a>
   * </h3>
   * <p>The value option should be Boolean. If the value option is undefined, then it is
   * <code class="prettyprint">false</code>.
   * </p>
   * <!-- - - Above this point, the tags are for the class.
   *              Below this point, the tags are for the constructor (initializer). - - - - -->
   *
   * @desc Creates or re-initializes a JET Switch.
   *
   * @param {Object=} options a map of option-value pairs to set on the component
   *
   * @example <caption>Initialize the switch with no options specified:</caption>
   * $(".selector").ojSwitch();
   *
   * @example <caption>Initialize the switch with some options specified:</caption>
   * $(".selector").ojSwitch({"value": true, "disabled": false});
   */
  oj.__registerWidget('oj.ojSwitch', $['oj']['editableValue'], {
    version: '1.1.0',
    defaultElement: '<input>',
    widgetEventPrefix: 'oj',

    options:
    {
      /**
       * <p>
       * Disabled <code class="prettyprint">true</code> disables the component and disables
       * all the inputs/labels.
       * Disabled <code class="prettyprint">false</code> enables the component, and leaves
       * the input's disabled state as it is in the DOM.
       * <p>
       *
       * @example <caption>Initialize component with
       * <code class="prettyprint">disabled</code> option:</caption>
       * $(".selector").ojSwitch({"disabled": true});
       *
       * @expose
       * @type {?boolean}
       * @default <code class="prettyprint">false</code>
       * @public
       * @instance
       * @memberof oj.ojSwitch
       */
      disabled: false,

      /**
       * Whether the component is readOnly. The element's
       * <code class="prettyprint">readOnly</code>
       *  property is used as its initial
       * value if it exists, when the option is not explicitly set. When neither is set,
       * <code class="prettyprint">readOnly </code>
       * defaults to false.
       *
       * @example <caption>Initialize component with
       * <code class="prettyprint">readOnly</code> option:</caption>
       * $(".selector").ojSwitch({"readOnly": true});
       *
       * @expose
       * @type {?boolean}
       * @default <code class="prettyprint">false</code>
       * @instance
       * @memberof oj.ojSwitch
       */
      readOnly: false,


      /**
       * Represents advisory information for the component, such as would be appropriate for
       * a tooltip.
       *
       * <p>
       * When a title is present it is by default displayed in the notewindow, or as determined by
       * the 'title' property set on the <code class="prettyprint">displayOptions</code> option.
       * When the <code class="prettyprint">title</code> option changes the component refreshes to
       * display the new title.
       * </p>
       *
       * @example <caption>Initialize component with
       * <code class="prettyprint">title</code> option:</caption>
       * $(".selector").ojSwitch({"title": "My Switch"});
       *
       * @expose
       * @type {string|undefined}
       * @default when the option is not set, the element's title attribute is used as its initial
       * value if it exists.
       * @public
       * @instance
       * @memberof oj.ojSwitch
       */
      title: '',

      /**
       * The state of the switch component (true/false).
       *
       * @example <caption>Initialize component (switch is ON) with
       * <code class="prettyprint">value</code> option:</caption>
       * $(".selector").ojSwitch({"value": true});
       *
       * @expose
       * @type {?boolean}
       * @default <code class="prettyprint">false</code>
       * @public
       * @instance
       * @memberof oj.ojSwitch
       */
      value: false

      // Events

      /**
       * Triggered when the ojSwitch is created.
       *
       * @event
       * @name create
       * @memberof oj.ojSwitch
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Currently empty
       *
       * @example <caption>Initialize the ojSwitch with the <code class="prettyprint">create</code> callback specified:</caption>
       * $( ".selector" ).ojSwitch({
       *     "create": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
       * $( ".selector" ).on( "ojcreate", function( event, ui ) {} );
       */
      // create event declared in superclass, but we still want the above API doc
    },

    // P U B L I C    M E T H O D S

    /**
     * Refreshes the switch
     * <p>A <code class="prettyprint">refresh()</code> or re-init is required
     * when a switch is programatically changed.
     *
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojSwitch( "refresh" );
     * @expose
     * @memberof oj.ojSwitch
     * @instance
     */
    refresh: function () {
      this._super();
      this._setup();
    },

    /**
     * Returns a jQuery object containing the element visually representing the switch.
     *
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @memberof oj.ojSwitch
     * @instance
     * @return {jQuery} the switch
     */
    widget: function () {
      return this._element2;
    },

    // @inheritdoc
    getNodeBySubId: function (locator) {
      var node;
      var subId;
      var rootElement = this.widget();

      node = (locator == null || locator['subId'] == null) ? rootElement : null;
      if (!node) {
        subId = locator['subId'];
        if (subId === 'oj-switch-thumb' || subId === 'oj-switch-track') {
          return rootElement.find('.' + subId)[0];
        }
      }
      return node || null;
    },

    /**
     * Returns the subId locator for the given child DOM node.
     * <p>
     * If DOM node is null then method returns null.
     * </p>
     * <p>
     * If DOM node is not a child of the current component then method returns null.
     * </p>
     *
     * @expose
     * @override
     * @memberof oj.ojSwitch
     * @instance
     * @param {!Element} node - child DOM node
     * @return {Object|null} The subId for the DOM node, or null when none is found.
     */
    getSubIdByNode: function (node) {
      var originalId = $(this.element).attr('id');
      var nodeId;
      var result = null;

      if (node != null) {
        if ($(node).hasClass('oj-switch-track') || $(node).hasClass('oj-switch-thumb')) {
          nodeId = $(node).parents('div.oj-switch')
            .find('input.oj-component-initnode')
            .attr('id');
          if (originalId === nodeId && $(node).hasClass('oj-switch-track')) {
            result = { 'subId': 'oj-switch-track' };
          } else if (originalId === nodeId && $(node).hasClass('oj-switch-thumb')) {
            result = { 'subId': 'oj-switch-thumb' };
          }
        }
      }

      return result;
    },

    // P R O T E C T E D    C O N S T A N T S   A N D   M E T H O D S

    /**
     * @private
     * @const
     */
    _BUNDLE_KEY:
    {
      _SWITCH_OFF: 'SwitchOFF',
      _SWITCH_ON: 'SwitchON'
    },

    /**
     * Overridden to set the options.value. When constructorOptions value is undefined,
     * we read the CHECKED, DISABLED, READONLY OPTIONS on the checkbox and
     * build the switch options from that.
     *
     * @memberof oj.ojSwitch
     * @instance
     * @protected
     */
    _InitOptions: function (originalDefaults, constructorOptions) {
      var props;
      var val;

      props = [
        { attribute: 'disabled', validateOption: true },
        { attribute: 'readonly', option: 'readOnly', validateOption: true },
        { attribute: 'checked', option: 'value', validateOption: false,
         coerceDomValue: function (domValue) {
           return domValue ? true : false;
         } },
        { attribute: 'title' }
      ];

      this._super(originalDefaults, constructorOptions);
      oj.EditableValueUtils.initializeOptionsFromDom(props, constructorOptions, this);

      val = this.option('value');
      this.option({ value: !!val },
                  { '_context': { writeback: true, internalSet: true } });
    },

    /**
     * Create switch component
     *
     * @override
     * @protected
     * @memberof oj.ojSwitch
     * @instance
     */
    _ComponentCreate: function () {
      this._super();

      if (!this.element.is('input')) {
        throw new Error('ojSwitch can be bound to INPUT only.');
      }

      this._inputElementOriginalDisplay = this.element.css('display');
      this.element
        .css('display', 'none')
        .attr('type', 'checkbox')
        .attr('checked', this.option('value'))
        .attr('tabindex', '-1')
        .attr('disabled', this.option('disabled'))
        .attr('readonly', this.option('readOnly'));

      if (this.OuterWrapper) {
        this._element2 = $(this.OuterWrapper);
      } else {
        this._element2 = this.element.wrap('<div></div>').parent();  // @HTMLUpdateOK trusted string
      }
      this._element2.addClass('oj-switch oj-component oj-form-control');
      this._element2.append("<div class='oj-switch-container'><div class='oj-switch-track'><div class='oj-switch-thumb' tabIndex='0'></div></div></div>"); // @HTMLUpdateOK append or prepend trusted new DOM to switch elem

      this.switchThumb = this._element2.find('.oj-switch-thumb');
      this.switchThumb
        .attr('role', this._setSwitchRole());

      // Set aria-label.. : aria-labelledby or aria-label
      this._setAriaLabel(this.element, this.switchThumb);
      //    this._setupEvents();
      this._setup();
    },

    /**
     * Set ARIA label for the switch: aria-labelledby or aria-label
     *
     * @protected
     * @memberof oj.ojSwitch
     * @instance
     */
    _setAriaLabel: function (elem, target) {
      var id = elem.prop('id');
      var ariaLabelledBy = elem.attr('aria-labelledby');
      var ariaLabel = elem.attr('aria-label');
      var switchLabel;

      if (ariaLabel) { // 1. <input aria-label='...' is set
        target.attr('aria-label', ariaLabel);
      } else if (ariaLabelledBy) { // 2. <input aria-labelledby='...' is set
        target.attr('aria-labelledby', ariaLabelledBy);
      } else {
        if (id) {
          switchLabel = $("label[for='" + id + "']");
          if (switchLabel) { // 3. <label for='...'
            if (switchLabel.attr('id')) {
              target.attr('aria-labelledby', switchLabel.attr('id'));
            } else {
              target.attr('aria-label', $(switchLabel).text());
            }
          }
        }
      }
    },

    /**
     * _setup is called on create and refresh.
     *
     * @memberof oj.ojSwitch
     * @instance
     * @private
     */
    _setup: function () {
      var rootElement = $(this.widget());
      var thumbTitle = this.option('title');

      this._setupEvents();

      if (rootElement === undefined) return;
      this.element
        .attr('checked', this.option('value')); // Switch vs Input synchonization

      rootElement.removeClass('oj-disabled oj-read-only oj-selected oj-hover oj-active');
      $(this.switchThumb).attr('tabindex', '0');
      $(this.switchThumb).html(''); // @HTMLUpdateOK

      if (this.option('disabled') || this.option('readOnly')) {
        if (this.option('disabled')) {
          rootElement.addClass('oj-disabled');
        } else {
          rootElement.addClass('oj-read-only');
          $(this.switchThumb).html(this._setReadOnlyValue()); // @HTMLUpdateOK internal strings
        }
        $(this.switchThumb).removeAttr('tabindex');
      }

      if (this.option('value')) {
        rootElement.addClass('oj-selected');
      }

      // Title
      if (thumbTitle !== undefined) {
        $(this.switchThumb).attr('title', thumbTitle);
      }

      // Aria
      $(this.switchThumb).attr('aria-checked', this.option('value'));

      $(this.switchThumb).removeAttr('aria-disabled');
      rootElement.removeAttr('aria-disabled');
      if (!this._CanSetValue()) {
        $(this.switchThumb).attr('aria-disabled', 'true');
      }
    },

    /**
     * Translate On/Off switch
     *
     * @protected
     * @memberof oj.ojSwitch
     * @instance
     */
    _setReadOnlyValue: function () {
      var strReturn = this._BUNDLE_KEY._SWITCH_OFF;
      if (this.option('value')) {
        strReturn = this._BUNDLE_KEY._SWITCH_ON;
      }
      return this.getTranslatedString(strReturn);
    },

    /**
     * Binding events to the switch component
     *
     * @protected
     * @memberof oj.ojSwitch
     * @instance
     */
    _setupEvents: function () {
      this._off(this._element2, 'keydown keyup mousedown mouseup mouseleave mouseenter touchstart');
      if (this._CanSetValue()) {
        this._on(this._element2, this._switchEvents);
        this._AddHoverable(this._element2);
      }
      this._focusable({
        'element': this.switchThumb,
        'applyHighlight': true
      });
    },

    /**
     * @override
     * @private
     */
    _switchEvents:
    {
      keydown: function (event) {
        // ENTER and SPACE will change the switch
        if (event.which === $.ui.keyCode.ENTER || event.which === $.ui.keyCode.SPACE) {
          $(event.currentTarget).addClass('oj-active');
          event.preventDefault();
        }
      },
      keyup: function (event) {
        // ENTER and SPACE will change the switch
        if (event.which === $.ui.keyCode.ENTER || event.which === $.ui.keyCode.SPACE) {
          this._SetValue(!this.option('value'), event);
        }
      },
      mousedown: function (event) {
        // LEFT MOUSE BUTTON will change the switch
        if (event.which === 1) {
          $(event.currentTarget).addClass('oj-active');
        }
      },
      mouseup: function (event) {
        // LEFT MOUSE BUTTON will change the switch
        if (event.which === 1) {
          this._SetValue(!this.option('value'), event);
        }
      },
      mouseleave: function (event) {
        if (event.which === 1) {
          $(event.currentTarget).removeClass('oj-active');
        }
      },
      mouseenter: function (event) {
        if (event.which === 1) {
          $(event.currentTarget).addClass('oj-active');
        }
      },
      "touchstart": function (event) {
        this._SetValue(!this.option('value'), event);
        event.preventDefault();
      }
    },

    /**
     * Returns the default styleclass for the component. Currently this is
     * used to pass to the _ojLabel component, which will append -label and
     * add the style class onto the label. This way we can style the label
     * specific to the input component. For example, for inline labels, the
     * checkboxset/checkboxset components need to have margin-top:0, whereas all the
     * other inputs need it to be .5em. So we'll have a special margin-top style
     * for .oj-label-inline.oj-checkboxset-label
     * All input components must override
     *
     * @return {string}
     * @memberof oj.ojSwitch
     * @override
     * @protected
     */
    _GetDefaultStyleClass: function () {
      return 'oj-switch';
    },
  /**
   * Whether the a value can be set on the component. For example, if the component is 
   * disabled or readOnly then setting value on component is a no-op. 
   * 
   * @see #_SetValue
   * @return {boolean}
   * @memberof oj.ojSwitch
   * @override
   * @protected
   */
    _CanSetValue: function ()
    {
      var readOnly;
      var superCanSetValue = this._super();

      if (!superCanSetValue)
        return false;

      readOnly = this.options['readOnly'] || false;
      return (readOnly) ? false : true;
    },
    /**
     * Returns switch role for ARIA
     * ToDo: for IE it should be role="cehckbox"
     *
     * @return {string}
     * @memberof oj.ojSwitch
     * @override
     * @protected
     */
    _setSwitchRole: function () {
      return 'switch checkbox';
    },

    /**
     * @ignore
     * @protected
     * @override
     */
    _destroy: function () {
      if (this._CanSetValue()) {
        this._RemoveHoverable(this._element2);
      }
      this._element2.find('.oj-switch-track').remove();
      oj.DomUtils.unwrap(this.element);
      this._RestoreAttributes(this.element);
      return this._super();
    },

    /**
     * Returns a jquery object of the launcher element representing the content nodes (switch).
     * @protected
     * @override
     * @memberof oj.ojSwitch
     */
    _GetMessagingLauncherElement: function () {
      return this._element2;
    },

    /**
     * Returns a jquery object of the elements representing the content nodes (switch thumb).
     * @protected
     * @override
     * @memberof oj.ojSwitch
     */
    _GetContentElement: function () {
      return this.switchThumb;
    },
    /**
   * Performs post processing after _SetOption() is called. Different options when changed perform
   * different tasks. See _AfterSetOption[OptionName] method for details.
   *
   * @param {string} option
   * @param {Object|string=} previous
   * @param {Object=} flags
   * @protected
   * @override
   * @memberof oj.ojSwitch
   * @instance
   */
  _AfterSetOption : function (option, previous, flags)
  {
    this._superApply(arguments);
    switch (option)
    {        
      case "readOnly":
        this._AfterSetOptionDisabledReadOnly(option, oj.EditableValueUtils.readOnlyOptionOptions);
        break;
      default:
        break;
    }

  },
    /**
     * @override
     * @private
     */
    _setOption: function (key, value, flags) {
      var coercedValue;
      switch (key) {
        case 'disabled':
        case 'readOnly':
        case 'value':
          coercedValue = !!value;
          break;
        default:
          coercedValue = value;
      }
      this._super(key, coercedValue, flags);
      this._setup();
    }

    // Fragments:

    /**
     * <table class="keyboard-table">
     *   <thead>
     *     <tr>
     *       <th>Target</th>
     *       <th>Gesture</th>
     *       <th>Action</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <td>Switch Thumb</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Toggle switch value</td>
     *     </tr>
     *     {@ojinclude "name":"labelTouchDoc"}
     *   </tbody>
     * </table>
     *
     * @ojfragment touchDoc - Used in touch gesture section of classdesc, and standalone gesture doc
     * @memberof oj.ojSwitch
     */

    /**
     * <table class="keyboard-table">
     *   <thead>
     *     <tr>
     *       <th>Target</th>
     *       <th>Key</th>
     *       <th>Action</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <td>Switch Thumb</td>
     *       <td><kbd>Enter</kbd> or <kbd>Space</kbd></td>
     *       <td>Toggle switch value</td>
     *     </tr>
     *     <tr>
     *       <td>Switch Thumb</td>
     *       <td><kbd>Tab In</kbd></td>
     *       <td>Set focus to the thumb. If hints, title or messages exist in a notewindow,
     *        pop up the notewindow.</td>
     *     </tr>
     *     {@ojinclude "name":"labelKeyboardDoc"}
     *   </tbody>
     * </table>
     *
     * <p>Disabled items can not receive keyboard focus.
     *
     * @ojfragment keyboardDoc - Used in keyboard section of classdesc, and standalone gesture doc
     * @memberof oj.ojSwitch
     */

    /**
     * {@ojinclude "name":"ojStylingDocIntro"}
     *
     * <p>
     * <table class="generic-table styling-table">
     *   <thead>
     *     <tr>
     *       <th>{@ojinclude "name":"ojStylingDocClassHeader"}</th>
     *       <th>{@ojinclude "name":"ojStylingDocDescriptionHeader"}</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <td>oj-switch</td>
     *       <td>Top level switch class. </td>
     *     </tr>
     *     <tr>
     *       <td>oj-focus-highlight</td>
     *       <td>{@ojinclude "name":"ojFocusHighlightDoc"}</td>
     *     </tr>
     *   </tbody>
     * </table>
     *
     * @ojfragment stylingDoc - Used in Styling section of classdesc, and standalone Styling doc
     * @memberof oj.ojSwitch
     */

  });
}());

/// ///////////////     SUB-IDS     //////////////////

/**
 * <p>Sub-ID for the switch's track.</p>
 *
 * @ojsubid oj-switch-track
 * @memberof oj.ojSwitch
 *
 * @example <caption>Get the node for the track:</caption>
 * var node = $( ".selector" ).ojSwitch( "getNodeBySubId", {'subId': 'oj-switch-track'} );
 */

/**
 * <p>Sub-ID for the switch's thumb.</p>
 *
 * @ojsubid oj-switch-thumb
 * @memberof oj.ojSwitch
 *
 * @example <caption>Get the node for the thumb:</caption>
 * var node = $( ".selector" ).ojSwitch( "getNodeBySubId", {'subId': 'oj-switch-thumb'} );
 */

(function() {
var ojSwitchMeta = {
  "properties": {
    "value": {
      "type": "boolean",
      "writeback": true
    },
    "readonly": {
      "type": "boolean",
      "writeback": true
    }
  },
  "methods": {
  },
  "extension": {
    _ALIASED_PROPS: {"readonly": "readOnly"},
    _INNER_ELEM: 'input',
    _WIDGET_NAME: "ojSwitch"
  }
};
oj.CustomElementBridge.registerMetadata('oj-switch', 'editableValue', ojSwitchMeta);
oj.CustomElementBridge.register('oj-switch', {'metadata': oj.CustomElementBridge.getMetadata('oj-switch')});
})();
});
