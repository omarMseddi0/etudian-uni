<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request detected! Only PUT method is allowed',
    ]);
    exit;
}

require 'db_connectee.php';
$database = new Operations();
$conn = $database->dbConnection();

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->id_Etudiant)) {
    echo json_encode(['success' => 0, 'message' => 'Please enter correct Students id.']);
    exit;
}

try {
    $fetch_post = "SELECT * FROM `etudiant` WHERE id_Etudiant=:id";
    $fetch_stmt = $conn->prepare($fetch_post);
    $fetch_stmt->bindValue(':id', $data->id_Etudiant, PDO::PARAM_INT);
    $fetch_stmt->execute();

    if ($fetch_stmt->rowCount() > 0) {
       
$row = $fetch_stmt->fetch(PDO::FETCH_ASSOC);
$prenom = isset($data->prenom) ? $data->prenom : $row['prenom'];
$nom = isset($data->nom) ? $data->nom : $row['nom'];
$mot_de_passe = isset($data->mot_de_passe) ? $data->mot_de_passe : $row['mot_de_passe'];
$id_Specialiter = $row['id_Specialiter'];

$update_query = "UPDATE `etudiant` SET prenom = :prenom, nom = :name, mot_de_passe = :mot_de_passe, id_Specialiter = :id_specialiter WHERE id_Etudiant = :id_etudiant";
$update_stmt = $conn->prepare($update_query);

$update_stmt->bindValue(':prenom', htmlspecialchars(strip_tags($prenom)), PDO::PARAM_STR);
$update_stmt->bindValue(':name', htmlspecialchars(strip_tags($nom)), PDO::PARAM_STR);
$update_stmt->bindValue(':mot_de_passe', htmlspecialchars(strip_tags($mot_de_passe)), PDO::PARAM_STR);
$update_stmt->bindValue(':id_etudiant', $data->id_Etudiant, PDO::PARAM_INT);
$update_stmt->bindValue(':id_specialiter', $id_Specialiter, PDO::PARAM_INT);

        if ($update_stmt->execute()) {
            echo json_encode([
                'success' => 1,
                'message' => 'Record updated successfully'
            ]);
            exit;
        }

        echo json_encode([
            'success' => 0,
            'message' => 'Did not update. Something went wrong.'
        ]);
        exit;

    } else {
        echo json_encode(['success' => 0, 'message' => 'Invalid ID. No record found by the ID.']);
        exit;
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}
?>