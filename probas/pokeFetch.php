<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $url = "https://pokeapi.co/api/v2/pokemon/piplup";
    $response = file_get_contents($url);
    var_dump($response);

    if ($response === false) {
        echo json_encode(["error" => "Error al realizar la petición."]);
    } else {
        $data = json_decode($response, true);
        if ($data === null) {
            echo json_encode(["error" => "Error al decodificar la respuesta JSON."]);
        } else {
            header('Content-Type: application/json');
            echo json_encode($data);
        }
    }
    ?>

</body>

</html>