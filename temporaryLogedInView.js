var logedIn = false;

$('document').ready(function(){

  if(logedIn){
    $('#navRegister').css('visibility', 'hidden');
    $('#navLogin').css('visibility', 'hidden');

    $('.navRightElm').append(
                    '<a href="member.html" class="navUser" id="navUserProfile"><img src="user.png" alt="User Icon">User Resu</a>',
                    '<a href="#" class="navUser" id="navUserLogout"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_logOut-ltr.svg/2000px-OOjs_UI_icon_logOut-ltr.svg.png" alt="Logout" back></a>');

    $('#navUserProfile').hover(
      function(){$('#navUserProfile img').css('background-color', '#D4AF37');},
      function(){$('#navUserProfile img').css('background-color', '#fff');}
    );
    $('#navUserLogout').hover(
      function(){$('#navUserLogout img').css('background-color', '#f44');},
      function(){$('#navUserLogout img').css('background-color', '#fff');}
    );


  } else {
    $('document').ready(function(){
      // $('#userRegistrationDiv').hide();
      // $('#userLoginDiv').hide();
      $('#navRegister').on('click', function(){
        if ($('#userRegistrationDiv').css('visibility') == 'hidden') {
          $('#userLoginDiv').css('visibility', 'hidden');
          $('#userRegistrationDiv').css('visibility', 'visible');
        } else
          $('#userRegistrationDiv').css('visibility', 'hidden');
      });


      $('#navLogin').on('click', function(){
        if ($('#userLoginDiv').css('visibility') == 'hidden') {
          $('#userRegistrationDiv').css('visibility', 'hidden');
          $('#userLoginDiv').css('visibility', 'visible');
        } else
          $('#userLoginDiv').css('visibility', 'hidden');
      });

      $('.cancelBtn').on('click', function(){
        $('#userRegistrationDiv').css('visibility', 'hidden');
        $('#userLoginDiv').css('visibility', 'hidden');
      });

    });
  }


});
