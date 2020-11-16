<?php

// Send Email
$send = '';

if( isset($_POST['email_address']) && !empty($_POST['email_address']) ){
	$send = send_message_to_agent( $_POST['full_name'], $_POST['email_address'], $_POST['message'] );
	if( $send ){
		$send = 
		"<div class='alert alert-success alert-dismissible' role='alert'>
        	<button type='button' class='close'><label aria-hidden='true'>&times;</label></button>
			<label class='alert-message'>Thank You! Your inquiry submitted successfully. we will contact you very soon.</label>
        </div>";        
	} else {
		$send = 
		"<div class='alert alert-danger alert-dismissible' role='alert'>
        	<button type='button' class='close'><label aria-hidden='true'>&times;</label></button>
			<label class='alert-message'>Oops! Something went wrong. We couldn't send your message. Please try again later.</label>
        </div>";
	}
} else {
	$send = 
	"<div class='alert alert-danger alert-dismissible' role='alert'>
    	<button type='button' class='close'><label aria-hidden='true'>&times;</label></button>
		<label class='alert-message'>Oops! Something went wrong. We couldn't send your message. Please try again later.</label>
    </div>";
}

function send_message_to_agent( $full_name, $email_address, $visiter_message ){
	
	$to      = 'vishal.patel5359@gmail.com';
	$subject = 'Food Truck Contact Page';
	
	$message = '<p>Name : '.$full_name.'</p>';
	$message .= '<p>Email Address : '.$email_address.'</p>';
	$message .= '<p>Message : '.$visiter_message.'</p>';
	
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: support@madlenedesign.com\r\n";
	
	return mail($to, $subject, $message, $headers);
}

echo $send;

?>
