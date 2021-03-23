$(document).ready(function(){

    $(".fab").click(function () { 
        task = $("#val").val();
         add(task) ;
    });

    $(".clear").click(function () { 
        del_all() ;
    });

    tasks = [] ;

   function add(name) { 
       tasks.push(name) ;
       $("#val").val("");
       render() ;
    }

    function del_all() { 
        tasks = [] ;
        render() ;
     }

   function render() { 
     let text = "";

     for (let stir of tasks) {
      text += '<li><input type="checkbox"/><do>'+stir+'</do></li>';
     }

     $(".todoList").html(text);

    }
render() ;
  });
