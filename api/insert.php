<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'OPTIONS') {
    header('HTTP/1.1 200 OK');
    die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request!.Only POST method is allowed',
    ]);
    exit;
endif;

require 'db_connectee.php';
$database = new Operations();
$conn = $database->dbConnection();

$data = json_decode(file_get_contents('php://input'));

if (
    !isset($data->nom)
    || !isset($data->prenom)
    || !isset($data->mot_de_passe)
    || !isset($data->id_Specialiter)
) :
    echo json_encode([
        'success' => 0,
        'message' => 'Please enter compulsory fields | Name, Prenom, Mot de passe and id_specialiter',
    ]);
    exit;

elseif (
    empty(trim($data->nom)) ||
    empty(trim($data->prenom)) ||
    empty(trim($data->mot_de_passe)) ||
    empty(trim($data->id_Specialiter))
) :
    echo json_encode([
        'success' => 0,
        'message' => 'Field cannot be empty. Please fill all the fields.',
    ]);
    exit;
endif;

try {
    $nom = htmlspecialchars(trim($data->nom));
    $prenom = htmlspecialchars(trim($data->prenom));
    $mot_de_passe = htmlspecialchars(trim($data->mot_de_passe));
    $id_specialiter = htmlspecialchars(trim($data->id_Specialiter));

    $query = 'INSERT INTO `etudiant`(
        nom,
        prenom,
        mot_de_passe,
        id_Specialiter
    ) 
    VALUES(
        :nom ,
        :prenom,
        :mot_de_passe,
        :id_specialiter
    )';

    $stmt = $conn->prepare($query);

    $stmt->bindValue(':nom', $nom, PDO::PARAM_STR);
    $stmt->bindValue(':prenom', $prenom, PDO::PARAM_STR);
    $stmt->bindValue(':mot_de_passe', $mot_de_passe, PDO::PARAM_STR);
    $stmt->bindValue(':id_specialiter', $id_specialiter, PDO::PARAM_INT);

    if ($stmt->execute()) {

        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Data Inserted Successfully.'
        ]);
        exit;
    }

    echo json_encode([
        'success' => 0,
        'message' => 'There is some problem in data inserting'
    ]);
    exit;

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}
?>