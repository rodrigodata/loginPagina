if (Meteor.isClient) {

  Template.loginPagina.events({

      'submit form': function(a,b){
          a.preventDefault();

          var email = b.find('#login-email').value
            , password = b.find('#login-password').value;

            Meteor.loginWithPassword(email, password, function(err){
              if(err)
                else
            });
            // retornar falso para o navegador não recarregar a página.
            return false;
      }
  })

}

if (Meteor.isServer) {

}
