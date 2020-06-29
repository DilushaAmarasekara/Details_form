$(document).ready(function(){

  $('form').on('submit', function(res,req){
     var id =req.body.id;
     var name = req.body.name;
     var email = req.body.email;
     var tel = req.body.tel;
     var login = {id:id,name:name,email:email,tel:tel};
      
       $.ajax({
       type: 'POST',
       url: '/login',
       data: login,
       success: function(data){
         //do something with the data via front-end framework
         location.reload();    
       }     
     });
     return false;
   });
 });    
