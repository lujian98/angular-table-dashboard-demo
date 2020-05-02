<?php

$data = file_get_contents("cars-huge.json");
$json_data = json_decode($data, true);
$gen_data = array('data' => array());
  foreach($json_data['data'] as $i=> $item) {
    $vin = $item['vin'];
    for( $i = 100; $i < 300; $i++) {
      $nvin =  $vin . $i;
      $item['vin'] = $nvin;
      $gen_data['data'][] = $item;
    }
  }

  $json_output = json_encode($gen_data, JSON_PRETTY_PRINT);
  // print_r($json_data);

  echo $json_output;

