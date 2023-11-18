<?php
include_once("db_connect.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
    $pwd = mysqli_real_escape_string($mysqli, trim($request->password));
    $username = mysqli_real_escape_string($mysqli, trim($request->username));
    
    $sql_etudiant = "SELECT * FROM etudiant WHERE nom = '$username' AND mot_de_passe = '$pwd'";
    $sql_administrateur = "SELECT * FROM administrateur WHERE nom = '$username' AND mot_de_passe = '$pwd'";
    $sql_enseignant = "SELECT * FROM enseignant WHERE nom = '$username' AND mot_de_passe = '$pwd'";
    
    $result_etudiant = mysqli_query($mysqli, $sql_etudiant);
    $result_administrateur = mysqli_query($mysqli, $sql_administrateur);
    $result_enseignant = mysqli_query($mysqli, $sql_enseignant);
    

    
    if($result_etudiant || $result_administrateur || $result_enseignant ) {
        $rows = array();
        while($row = mysqli_fetch_assoc($result_etudiant)) {
            $rows[] = $row;
        }
        while($row = mysqli_fetch_assoc($result_administrateur)) {
            $rows[] = $row;
        }
        while($row = mysqli_fetch_assoc($result_enseignant)) {
            $rows[] = $row;
        }

        echo json_encode($rows);
    } else {
        http_response_code(404);
    }
}
?>