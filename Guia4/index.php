<?php
    // Conexion a la Base de datos
    $connect = mysqli_connect('localhost', 'root', '', 'guia1');

    // Seleccion de datos a la tabla
    $select = "SELECT * FROM product;";

    // Ejecucion o Solicitud de los datos tipo array
    $ejec=mysqli_query($connect, $select);

    // Total de Registros
    $num=mysqli_num_rows($ejec);


// Url Local del archivo "fpdf.php"
require('../fpdf.php');

class PDF extends FPDF
{

function Header()
{
    // Titulo
    $this->SetFont('Arial','B',16);
    $this->Cell(270,10,utf8_decode('Tabla Producto'), 0,0,'C');
    $this->Ln(10);

    // Tipografia del Header 
    $this->SetFont('Arial','B',15);
    $this->SetTextColor(114,176,250);
    $this->SetDrawColor(21,126,251);

    // Contenido del Header
    $this->Cell(20,10,utf8_decode(''),0,0);
    $this->Cell(30,10,utf8_decode('Codigo'),1,0, 'C');
    $this->Cell(90,10,utf8_decode('Descripcion'),1,0, 'C');
    $this->Cell(35,10,utf8_decode('Precio'),1,0, 'C');
    $this->Cell(35,10,utf8_decode('Stock Actual'),1,0, 'C');
    $this->Cell(40,10,utf8_decode('Stock Minimo'),1,1, 'C');
    // $this->Cell(35,10,utf8_decode('Imagen'),1,1, 'C');
}

function Footer()
{
    // Localizacion del texto en el eje 'Y'
    $this->SetY(-15);

    // Celda Vacia
    $this->Cell(0);

    // Tipografia del Footer
    $this->SetFont('Arial','',8);

    // Texto del Footer
    $this->Cell(0,0,utf8_decode(date('l, jS \of F Y, h:i:s A ')),0,1, 'R');
    // $this->Cell(0,10,'Pagina '.$this->PageNo().'/{nb}',0,0,'C');
    $this->Cell(0,10,utf8_decode('©2021 Cristopher Sic | Todos los derechos reservados'),0,0,'C');

}
}

// Creacion del PDF
$pdf = new PDF('L');

// Cantidad de Paginas en total
$pdf->AliasNbPages();

// Agrega un pagina a el DOC
$pdf->AddPage();

// Tipografia
$pdf->SetFont('Times','',12);
$pdf->SetTextColor(0,0,0);

while($res=mysqli_fetch_array($ejec)){
    $pdf->Cell(20,10,utf8_decode(''),0,0);

    // Mostramos los datos segun la columna de la tabla
    $pdf->Cell(30,10,utf8_decode($res["code"]),0,0, 'C');
    $pdf->Cell(90,10,utf8_decode($res["des"]),0,0, 'L');
    $pdf->Cell(5,10,utf8_decode('Q.'),0,0);
    $pdf->Cell(30,10,utf8_decode($res["price"]),0,0, 'R');
    $pdf->Cell(35,10,utf8_decode($res["stock_act"]),0,0, 'C');
    $pdf->Cell(35,10,utf8_decode($res["stock_min"]),0,1, 'L');
}

$pdf->SetFont('Arial','B',8);
$pdf->Cell(0,10,'Total de Registros: '.$num,0,1,'C');


// Muetre el contenido
$pdf->Output();
?>