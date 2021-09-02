<?php
if(isset($_POST['submitButton'])){
  
    // the message
    $msg = "Nome: " . $_POST['nome_input'] . "\n" . "Cognome: " . $_POST['cognome_input'] . "\n\n" . $_POST['messaggio_input'];
    
    //object
    $obj = $_POST['oggetto_input'];
  
    // use wordwrap() if lines are longer than 70 characters
    $msg = wordwrap($msg,70);
      
    // send email
    mail("dennisturco@gmail.com", $obj ,$msg);
    
    
    
    //reindirizzamento
    header("refresh:0; url=/index.html");
    
    //alet -- conferma invio
    echo '<script>alert("Messaggio Inviato!")</script>';
  }
?>