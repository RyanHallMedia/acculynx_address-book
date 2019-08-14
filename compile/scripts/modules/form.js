// /*
//   Module: contactForm
// */
//

// join section form
$('#joinForm').submit(function(ev) {
  // Prevent the form from actually submitting
  ev.preventDefault();

  // Send it to the server
  $.post({
    url: '/',
    dataType: 'json',
    data: $(this).serialize(),
    success: function(response) {
        if (response.success) {
          $('#thanks').fadeIn();
          $('#joinForm').hide();
        } else {
            // response.error will be an object containing any validation errors that occurred, indexed by field name
            // e.g. response.error.fromName => ['From Name is required']
            for ( var fieldId in response.error ) {

              // Create the <ul>
              var $errors = $( '<ul class="errors" />' );

              // Wrap the error messages in <li> tags
              var messages = $.map(response.error[fieldId], function(message){
                  // return '<li>' + message + '</li>';
              });

              // Append the error messages to the ul
              $errors.append( messages.join( '' ) );

              // Select the input element and append the .errors <ul> after it.
              $('#'+fieldId).after($errors).addClass('nogood');

            }
          }
        }
    });
});

// site wide form
$('#contactForm').submit(function(ev) {
  // Prevent the form from actually submitting
  ev.preventDefault();

  // Send it to the server
  $.post({
    url: '/',
    dataType: 'json',
    data: $(this).serialize(),
    success: function(response) {
        if (response.success) {
          $('#thanks').fadeIn();
          $('#contactForm').hide();
        } else {
            // response.error will be an object containing any validation errors that occurred, indexed by field name
            // e.g. response.error.fromName => ['From Name is required']
            for ( var fieldId in response.error ) {

              // Create the <ul>
              var $errors = $( '<ul class="errors" />' );

              // Wrap the error messages in <li> tags
              var messages = $.map(response.error[fieldId], function(message){
                  // return '<li>' + message + '</li>';
              });

              // Append the error messages to the ul
              $errors.append( messages.join( '' ) );

              // Select the input element and append the .errors <ul> after it.
              $('#'+fieldId).after($errors).addClass('nogood');

            }
          }
        }
    });
});
