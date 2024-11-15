<?php
/*
Plugin Name: react app
Plugin URI: http://wordpress.org/plugins/hello-dolly/
Description: This is not just a plugin.
Author: suresh
Version: 1.7.2
Author URI: suresh
*/

function wp_react_app_enqueue_scripts() {
    $plugin_url = plugin_dir_url(__FILE__);

    // Enqueue the React app build files
    wp_enqueue_script('wp-react-app-js', $plugin_url . 'build/static/js/main.dadf0222.js', array(), '1.0', true);
    wp_enqueue_style('wp-react-app-css', $plugin_url . 'build/static/css/main.2f4945f5.css', array(), '1.0');
	
	
   }
add_action('wp_enqueue_scripts', 'wp_react_app_enqueue_scripts');


// Shortcode to display the React app

function wp_react_app_shortcode() {
    return '<div id="root"></div>';
}
add_shortcode('react_app', 'wp_react_app_shortcode');


register_activation_hook(__FILE__, 'create_custom_user_table');


function create_custom_user_table() {
    global $wpdb;
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    
	$custom_user_data = $wpdb->prefix . 'custom_user_data';	
	$files = $wpdb->prefix . 'files';	
	$general = $wpdb->prefix . 'general';
	$identification = $wpdb->prefix . 'identification';
	$income = $wpdb->prefix . 'income';
	$legal_conveyance = $wpdb->prefix . 'legal_conveyance';
	$loan = $wpdb->prefix . 'loan';
	$security = $wpdb->prefix . 'security';
	$stmt_position = $wpdb->prefix . 'stmt_position';

    // SQL statement to create the table
    $charset_collate = $wpdb->get_charset_collate();
	$queries = array();	
	
	
	$general = $wpdb->prefix . 'general';
	$identification = $wpdb->prefix . 'identification';
	$income = $wpdb->prefix . 'income';
	$legal_conveyance = $wpdb->prefix . 'legal_conveyance';
	$loan = $wpdb->prefix . 'loan';
	$security = $wpdb->prefix . 'security';
	$stmt_position = $wpdb->prefix . 'stmt_position';

array_push($queries,"CREATE TABLE IF NOT EXISTS $files (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
		user_id bigint(20) not NULL,		
        file_name varchar(255) NULL,
        file_url varchar(255) NULL,
		file_type char(20),
		file_size  int(20),		
        upload_date datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id)
       
    ) $charset_collate;");
	
	array_push($queries,"CREATE TABLE IF NOT EXISTS $loan (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
		user_id bigint(20) NOT NULL,       
        file_name varchar(255) NOT NULL,
        file_url varchar(255) NOT NULL,
		file_type char(20),
		file_size  int(20),
		file_category varchar(255) NULL,
        upload_date datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id),
        UNIQUE KEY user_id (user_id)
    ) $charset_collate;");

	array_push($queries,"CREATE TABLE IF NOT EXISTS $general (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
		user_id bigint(20) NOT NULL,       
        file_name varchar(255) NOT NULL,
        file_url varchar(255) NOT NULL,
		file_type char(20),
		file_size  int(20),
		file_category varchar(255) NULL,
        upload_date datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id),
        UNIQUE KEY user_id (user_id)
    ) $charset_collate;");
	
	array_push($queries,"CREATE TABLE IF NOT EXISTS $identification (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
		user_id bigint(20) NOT NULL,       
        file_name varchar(255) NOT NULL,
        file_url varchar(255) NOT NULL,
		file_type char(20),
		file_size  int(20),
		file_category varchar(255) NULL,
        upload_date datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id),
        UNIQUE KEY user_id (user_id)
    ) $charset_collate;");
	
	
	array_push($queries,"CREATE TABLE IF NOT EXISTS $income (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
		user_id bigint(20) NOT NULL,       
        file_name varchar(255) NOT NULL,
        file_url varchar(255) NOT NULL,
		file_type char(20),
		file_size  int(20),
		file_category varchar(255) NULL,
        upload_date datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id),
        UNIQUE KEY user_id (user_id)
    ) $charset_collate;");
	
	array_push($queries,"CREATE TABLE IF NOT EXISTS $security (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
		user_id bigint(20) NOT NULL,       
        file_name varchar(255) NOT NULL,
        file_url varchar(255) NOT NULL,
		file_type char(20),
		file_size  int(20),
		file_category varchar(255) NULL,
        upload_date datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id),
        UNIQUE KEY user_id (user_id)
    ) $charset_collate;");
	
	array_push($queries,"CREATE TABLE IF NOT EXISTS $stmt_position (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
		user_id bigint(20) NOT NULL,       
        file_name varchar(255) NOT NULL,
        file_url varchar(255) NOT NULL,
		file_type char(20),
		file_size  int(20),
		file_category varchar(255) NULL,
        upload_date datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id),
        UNIQUE KEY user_id (user_id)
    ) $charset_collate;");
	
	
	array_push($queries,"CREATE TABLE IF NOT EXISTS $legal_conveyance (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
		user_id bigint(20) NOT NULL,       
        file_name varchar(255) NOT NULL,
        file_url varchar(255) NOT NULL,
		file_type char(20),
		file_size  int(20),
		file_category varchar(255) NULL,
        upload_date datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id),
        UNIQUE KEY user_id (user_id)
    ) $charset_collate;");
	array_push($queries,"CREATE TABLE IF NOT EXISTS $custom_user_data (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        user_id bigint(20) NOT NULL,
		application_id bigint(20) NOT NULL,
        email varchar(255) NOT NULL,
		phone varchar(255) NOT NULL,
		role varchar(255) not null,
        PRIMARY KEY  (id),
        UNIQUE KEY user_id (user_id),
		UNIQUE KEY application_id(application_id)
    )$charset_collate");

    foreach($queries as $key=>$sql){	
    dbDelta($sql);
	}	
  
}


function my_plugin_allow_cors() {
    // Allow any origin (or set to a specific domain for security)
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    // Handle OPTIONS preflight requests (common for file uploads)
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        exit;
    }
}
add_action('rest_api_init', 'my_plugin_allow_cors');
add_action('init', 'my_plugin_allow_cors');

add_action('rest_api_init', function () {
	
	
    register_rest_route('wp/v2', 'users/login', array(
        'methods' => 'POST',
        'callback' => 'wp_react_auth_login',
        'permission_callback' => '__return_true', // Adjust permission as needed
    ));
	
	
    register_rest_route('wp/v2', '/users/register', array(
        'methods' => 'POST',
        'callback' => 'register_user',
        'permission_callback' => '__return_true', // Adjust permissions as needed
    ));
	/*
    register_rest_route('wp/v2', 'users/sendotp', array(
        'methods' => 'POST',
        'callback' => 'send_otp',
        'permission_callback' => '__return_true',
    ));
	
	
	register_rest_route('wp/v2', 'users/verifyotp', array(
        'methods' => 'POST',
        'callback' => 'verify_otp',
        'permission_callback' => '__return_true',
    ));
	
	*/
	register_rest_route('wp/v2', '/users/upload', array(
        'methods' => 'POST',
        'callback' => 'handle_file_upload',
        'permission_callback' => '__return_true',
    ));	
	register_rest_route('wp/v2', '/users/doccategorise', array(
        'methods' => 'POST',
        'callback' => 'handle_file_categorise',
        'permission_callback' => '__return_true',
    ));	
			
});



function wp_react_auth_login(WP_REST_Request $request) {
	
global $wpdb;
$username = sanitize_email($request->get_param('username'));
$password = $request->get_param('password');    

 $creds = array(
        'user_login'    => $username,
        'user_password' => $password,
        'remember'      => true,
    );

    $user = wp_signon($creds, false);
	
if (is_wp_error($user)) {
    return new WP_REST_Response(array('error' => 'Invalid credentials'), 401);
}

$token = wp_generate_auth_cookie($user->ID, 3600, 'auth');


$custom_user_data = $wpdb->prefix . 'custom_user_data';
    $sql = "SELECT * FROM $custom_user_data WHERE email = %s";
    $prepared = $wpdb->prepare($sql, $username);
    $user_data = $wpdb->get_results($prepared);

if ($user_data === null) {
        error_log('No user data found for email: ' . $username);
    }

    return new WP_REST_Response(array(
        'success' => true,
		'id'=>$user->ID,
        'message' => 'Login successful!!',
        'token' => $token,
		'custom_data'=>$user_data,
        'display_name' =>$user->display_name 
       
    ), 200);	
			
}
	
function reg_number($id)
        {
            $regNum = '';
            $uniqueId = str_pad($id, 6, '0', STR_PAD_LEFT);
            $year = date('y');			
			$dayoftheyear=date('z');			
            $regNum = $year.$dayoftheyear.$uniqueId;			
            return $regNum;		
			
        }; 

function register_user(WP_REST_Request $request) {
	global $wpdb;
    $username = sanitize_user($request->get_param('username'));
    $password = $request->get_param('password');
    $email = sanitize_email($request->get_param('email'));
	
    $phone = $request->get_param('phone'); // Phone number
	$role='customer';

    if (empty($username) || empty($password) || empty($email)) {
        return new WP_Error('missing_fields', 'Missing fields', array('status' => 400));
    }

    if (email_exists($email)) {
        return new WP_Error('user_exists', 'Email already exists', array('status' => 400));
    }

    $user_id = wp_create_user($username, $password, $email); 


    if (is_wp_error($user_id)) {
        return new WP_Error('registration_failed', $user_id->get_error_message(), array('status' => 400));
    }
    $user = new WP_User($user_id);
    $user->set_role($role); // Set user role Automatically log in the user after registration
    wp_set_current_user($user_id);
    wp_set_auth_cookie($user_id);	 

    
    $table_name = $wpdb->prefix . 'custom_user_data';
     
	 //$register_no=reg_number($user_id);

    $inserted=$wpdb->insert($table_name, array(
        'user_id' => $user_id,
		'application_id'=>reg_number($user_id),
        'email' => $email,
		'phone'=>$phone,
		'role'=>$role
    ));	
	if(inserted){
		return new WP_REST_Response(array('success' => true,'user_id' => $user_id), 201);
	}
	else{
		return new WP_REST_Response(array('success' => false,'user_id' => $user_id), $wpdb->last_error_code);
	}    
}


function send_otp(WP_REST_Request $request) {
	
	//$phone_number='916380634518';
	
	//$phone_number="61488838555";
	
	$phone_number = sanitize_text_field($request->get_param('phone'));
try{	
$curl = curl_init();
curl_setopt_array($curl, [
  CURLOPT_URL => "https://control.msg91.com/api/v5/otp?otp_expiry=1&template_id=6729c1aad6fc051ec736c5a3&mobile=$phone_number&authkey=433833AO06hFj76729c24eP1&realTimeResponse=1",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n  \"Param1\": \"value1\",\n  \"Param2\": \"value2\",\n  \"Param3\": \"value3\"\n}",
  CURLOPT_HTTPHEADER => [
    "Content-Type: application/JSON"
  ],
]);

$response = curl_exec($curl);
}
catch (Exception $e) {
//$err = curl_error($curl);

 error_log('curl Error: ' . $e->getMessage());
 
 error_log(CURLOPT_URL);
 
        return new WP_REST_Response(['success' => false, 'message' => 'Failed to send OTP.'], 500);
 
}

curl_close($curl);

	
	
	/*
	
    $phone_number = sanitize_text_field($request->get_param('phone'));
    $otp = rand(1000, 9999); // Generate a 4-digit OTP

    set_transient('otp_' . $phone_number, $otp, 300); // Store OTP for 5 minutes
    $twilio_number = '+919790724947';
    $account_sid="ACdf8b5a53c54c5239e0cf2e27d07f6ad6";
	$auth_token="b7473870ae471f25efa08419cad9ac9f";
   try {
	     $twilio = new Client($account_sid, $auth_token);
	
	 
        $twilio->messages->create($phone_number, [
        'from' => $twilio_number,
        'body' => "Your OTP is $otp."
		//Enter this code now to verify your phone number. Remember, it expires in 5 minutes! If this wasn’t you, please discard the message."
     ]);
	  return new WP_REST_Response(array('success' => true, 'message' => 'OTP sent!'), 200);

   }
   catch (Exception $e) {
       
        error_log('Twilio Error: ' . $e->getMessage());
        return new WP_REST_Response(['success' => false, 'message' => 'Failed to send OTP.'], 500);
 
   }
   */
return new WP_REST_Response(array('resdata'=>$response,'success' => true, 'message' => 'OTP sent!'), 200);

}


function verify_otp(WP_REST_Request $request) {
      $phone_number = sanitize_text_field($request->get_param('phone'));
	  //$phone_number="61488838555";
      $otp = sanitize_text_field($request->get_param('otpvalue'));
/*
    // Retrieve the stored OTP
    $stored_otp = get_transient('otp_' . $phone_number);

    if ($stored_otp === $otp) {
        // OTP is valid
        delete_transient('otp_' . $phone_number); // Remove the OTP from storage
        return new WP_REST_Response(array('success' => true, 'message' => 'OTP verified successfully!'), 200);
    } else {
        // OTP is invalid or expired
        return new WP_REST_Response(array('success' => false, 'message' => 'Invalid OTP!'), 400);
    }
	*/
	
	$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://control.msg91.com/api/v5/otp/verify?otp=$otp&mobile=$phone_number",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => [
    "authkey:433833AO06hFj76729c24eP1"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}

if ($response) {
      
        return new WP_REST_Response(array('success' => true, 'message' => 'OTP verified successfully!'), 200);
    } else {
        // OTP is invalid or expired
        return new WP_REST_Response(array('success' => false, 'message' => 'Invalid OTP!'), 400);
    }

}

/*folder create with name "user-uploads" */

function create_upload_directory() {
    $upload_dir = wp_upload_dir();
    $custom_dir = $upload_dir['basedir'] . '/user-uploads';

    if (!file_exists($custom_dir)) {
        wp_mkdir_p($custom_dir);
    }
}
add_action('plugins_loaded', 'create_upload_directory');
/*folder create end*/


/*handle upload using ajax*/
	
//function my_custom_ajax_handler() {
	
function handle_file_upload(){
	  global $wpdb;
    	
		  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
			// Get the raw POST data
			$rawData = file_get_contents('php://input');
			// Decode the JSON data into a PHP associative array
			$jsonData = json_decode($rawData, true);
			//error_log(print_r($jsonData, true));					
			
			$upload_dir = wp_upload_dir();
			
			
            $target_dir = $upload_dir['basedir'] . '/user_upload/'; 
			
			if (!is_dir($target_dir)) {
				wp_mkdir_p($target_dir);
			}
		
			

			try {
				$allinserted=true;
				$errorMessage='';
			
				foreach ($jsonData as $file) {
						
						if (isset($file['name'], $file['type'], $file['size'],$file['id'])) 
						{		
						
						// Move the file to the target folder
						$filename = sanitize_file_name($file['name']);
			            $target_file = $target_dir . basename($filename);
						
						//error_log(print_r($file['tmp_name'], true));
						//error_log(print_r($target_file, true));
						
											
							//if(move_uploaded_file($filename, $target_file)) 
							if(file_put_contents($target_file,$file['name']))
							{								
							$table_name=$wpdb->prefix.'files';
							$format=['%d','%s','%s','%s','%d'];				
							
							$data = [
									'user_id' => sanitize_file_name($file['id']),
									'file_name' => sanitize_file_name($file['name']),
									'file_url' =>  $upload_dir['baseurl'] . '/user_upload/' . $filename,							
									'file_type'  => sanitize_file_name($file['type']),
									'file_size'  => sanitize_file_name($file['size']),							
								   ];
							//error_log(print_r($data, true));
							$inserted=$wpdb->insert($table_name, $data, $format);

							if ($inserted === false) 
							{
								$allInserted = false; // Mark as failed if any insert fails
								$errorMessage = "Failed to insert file: " . $file['name'];
								break; // Stop the loop on the first error (optional)
							}
					
					
							}
							else
							{
							  return new WP_REST_Response(array('success' => false,'message'=>'File upload failed'), 500);	
							}
						}
																
						
						else{
							$allInserted = false;
							$errorMessage = 'Failed to insert';
							break; 
							}
					}   //foreach end
					if ($inserted) {	
					  
					  return new WP_REST_Response(array('success' => true, 'message' => 'Data Inserted successfully!'), 200);
					} 
					else 
					{						
						return new WP_REST_Response(array('success' => false, 'message' => $errorMessage), 400);
					}

					
			} 
	  		  
			catch (Exception $e) {
				$message="Error inserting file: " . $e->getMessage();
				return new WP_REST_Response(array('success' => false, 'message' => $message), 400);
			}
       } 
		else {
			$message="Invalid file data: Missing name, type, or size.";
			return new WP_REST_Response(array('success' => false, 'message' => $message), 400);
		}
	
}

function handle_file_categorise(){
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		error_log("welcome");
	}
	$user_id = $request->get_param('user');
	$jsonData = file_get_contents("php://input");
	error_log(print_r($jsonData,true));
    error_log(print_r($user_id,true));
// Decode JSON data to an associative array
   $data = json_decode($jsonData, true);
	error_log(print_r($data,true));
}
	
