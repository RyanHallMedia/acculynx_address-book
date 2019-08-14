// -------------------------------------
//   Front-end form validation w/ parsley
// -------------------------------------

var initValidation =  function() {
  $('form').parsley({
    errorsContainer: function(pEle) {
      var $err = pEle.parent.$element.find('.form__message');
      return $err;
    }
  });
};
