/* **********    Asincronía y el Event Loop     ********** */
    
    /*  Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:
    
    
    ******* Event loop *********
     Es un mecanismo central en la arquitectura de JavaScript que permite que el lenguaje sea asíncrono y no bloquee el hilo principal de ejecución. El event loop es responsable de manejar la cola de eventos y ejecutar funciones de callback asociadas con eventos específicos.

     https://media.licdn.com/dms/image/C5612AQFMkf3d5xe9sw/article-cover_image-shrink_600_2000/0/1625502188303?e=2147483647&v=beta&t=gAW4qsEU4-E4q2_aY0D2psGXJ8mDM0siEEEwLyxOhrk


     https://media.licdn.com/dms/image/C5112AQEqxtxcoIrzHA/article-cover_image-shrink_720_1280/0/1585302700768?e=2147483647&v=beta&t=_SVr3-RrFuJhoiQnbxz4RUaqjA8-IVqdsnsdnWs-v64
     
     https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210122115136/Untitled-Diagram3.jpg
     
     https://i.ibb.co/nbQc6sk/Javascript-event-loop.png 
     
     https://geekflare.com/wp-content/uploads/2019/10/1_7GXoHZiIUhlKuKGT22gHmA-1.png 
     
     https://flaviocopes.com/images/javascript-event-loop/call-stack-first-example.png
     
     https://www.javascripttutorial.net/wp-content/uploads/2019/12/javascript-event-loop-callstack.png } 
     
          **** Procesamiento Single thread (un solo hilo) ****
     Javascript es single thread, quiere decir que todas las tareas se ejecutan en un solo hilo, se apilan y esperan la salida de otras tareas para poder ejecutarse)

     **** Operaciones de entrada salida I/O **************
    Esperan la peticion del recurso que han solicitado por ejemplo enviar un formulario donde esperas una respuesta de que se ha almacenado correctamente la información o cuando haces una compra en linea te regresa el mensaje de que la compra se realizo con exito o en dado caso un error     

     ***** Operaciones bloqueantes *******
    Impiden que el hilo de ejecución principal de un programa continúe ejecutando otras tareas hasta que la operación en cuestión se completa. Durante una operación bloqueante, el hilo de ejecución se detiene y espera a que se complete la tarea antes de continuar con cualquier otra tarea.

    ****** Operaciones no bloqueantes ***********
    Permiten que el hilo de ejecución principal de un programa continúe ejecutando otras tareas mientras se realiza una tarea en segundo plano. En otras palabras, una operación no bloqueante no detiene la ejecución del hilo principal y permite que otras tareas continúen ejecutándose en paralelo.

     ***** Operaciones Síncronas *****
     Se ejecutan en orden secuencial y bloquean la ejecución del hilo principal hasta que se completa la tarea en cuestión. Durante una operación sincrónica, el hilo de ejecución principal se detiene y espera a que la operación se complete antes de continuar con cualquier otra tarea.
     
        ******** Asíncronas. ********
     
     Permiten que el hilo de ejecución principal de un programa continúe ejecutando otras tareas mientras se realiza una tarea en segundo plano. En otras palabras, una operación asíncrona no detiene la ejecución del hilo principal y permite que otras tareas continúen ejecutándose en paralelo.
     
     
     https://www.freecodecamp.org/espanol/news/content/images/2022/08/freeCodeCamp-Cover-2.png 


          En Arquitectura Event loop de Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo, (single thread) para operaciones de entrada y salida (input/output).
     
      http://latentflip.com/loupe/


          /* **********   Temporizadores (setTimeout & setInterval)     ********** */
/* Permiten programar temporizadores para ejecutar código en un momento posterior:

setTimeout(): se utiliza para ejecutar una función después de un tiempo específico en milisegundos. La sintaxis es: setTimeout(función, tiempo);


setInterval(): se utiliza para ejecutar una función repetidamente cada cierto tiempo en milisegundos. La sintaxis es: setInterval(función, tiempo);

      http://latentflip.com/loupe/


*/
     
         /* **********     Callbacks   ********** */

/*
se utiliza en los metodo eventlistener si o si se deben usar recibe una function que se debe ejecutar en ese eventp

ejemplo: imaginate que haces una peticion a una api
con los datos de esa api haces una consulta a base de datos y luego con los datos obtenidos pintas la interfaz del usuario



*/