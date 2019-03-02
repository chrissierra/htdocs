$userId = 'e3c0ca07-7e07-4eee-a167-92806b90a122';
$content = array(
"en" => $message//mesaj burasi
);
$fields = array(
'app_id' => "26077e71-a1ec-4e0d-a25b-2f03e4a65dc3",
'included_segments' =>  array("Active Users", "Inactive Users"),
'data' => array("foo" => "bar"),
'filters' => array(array('field' => 'tag', 'key' => $userId, 'relation' => '=', 'value' => $userId)),
'contents' => $content
);
 
$fields = json_encode($fields);
print("\nJSON sent:\n");
print($fields);
 
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
curl_setopt($ch, CURLOPT_HTTPHEADER, 
array('Content-Type: application/json; charset=utf-8',
'Authorization: Basic YmRmMzVjMjktNjhmNy00Y2Y1LTlmN2MtYzk2ZjIwOTczNDRj'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_POST, TRUE);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
 
$response = curl_exec($ch);
curl_close($ch);