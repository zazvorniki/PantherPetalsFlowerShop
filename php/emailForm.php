<?
  $emailTo = ' panterpaws@gmail.com';
  $subject = 'Request for  flowers';
  $flowers = $_POST['flowers'];
  $toFirst= $_POST['toFirst'];
   $toLast= $_POST['toLast'];
  $fromFirst = $_POST['fromFirst'];
  $fromLast = $_POST['fromLast'];
  $email = $_POST['email'];
  $date= $_POST['date']; 
$header = "Please prepair a $flowers for $toFirst $toLast, from $fromFirst $fromLast on $date. If there are any questions email $email to clarify. ";
 mail($emailTo, $subject,  $header) or die("Error");   
?>