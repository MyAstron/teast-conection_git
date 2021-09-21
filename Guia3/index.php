<html>
    <head>
        <title>Inicio</title>
    </head>
    <body>
        <header>
            <h1 align="center">Mostrar Datos Con Img's</h1>
        </header>
        <form action="index.php" method="get">
<?php 
error_reporting(0);
	echo '
		<table align="center">
			<tr class="top">
				<th> Codigo </th><th> Descripcion </th><th> Precio </th><th> Stock Actual </th><th> Stock Minimo </th> <th> Img </th>
			<tr>';
	$connect = mysqli_connect('localhost', 'root', '', 'guia1');
	$all = "SELECT * from product";
	$reslut = mysqli_query($connect, $all);
	$num=mysqli_num_rows($reslut);
	$pag = 4;
	$end = floor($num/$pag);
	if(isset($_GET['pagina'])){
		$nPag = $_GET['pagina'];
	}else{
		$nPag = 0;
	}
	$first = $nPag*$pag;
	$select = "SELECT * from product limit $first, $pag";
	$obj = mysqli_query($connect, $select);
	while ($res=mysqli_fetch_array($obj)) { 
		echo '
			<tr class="res">
				<td>'.$res["code"].'</td><td>'.$res["des"].'</td><td>'.$res["price"].'</td><td>'.$res["stock_act"].'</td><td>'.$res["stock_min"].'</td> <td> <img src="../Imgs/Guia3/'.$res["code"].'.png"> </td>
			</tr>';
	}
	echo '
			<tr>
				<th colspan="6" align="center" class="fot">';
		if($nPag == 0) echo '&nbsp; ⮿ &nbsp;';
		if($nPag != 0) echo '&nbsp;<a href="?pagina='.($nPag-1).'"> ⮈ </a>&nbsp;';
	for ($i=0; $i <= $end; $i++) { 
		if($nPag == $i){
			echo '- &nbsp; [ <a href="?pagina='.$i.'">'.($i+1).'</a> ] &nbsp; -';
		}/*else{
			echo '&nbsp;<a href="?pagina='.$i.'">'.$i.'</a>&nbsp;';
		}*/
	}
		if($nPag == $end) echo '&nbsp; ⮿ &nbsp;';
		if($nPag != $end) echo '&nbsp;<a href="?pagina='.($nPag+1).'"> ⮊ </a>&nbsp;';
	echo '		</th>
			</tr>
		</table>';
?>
            <p align="center">
                ©2021 Cristopher Sic | Todos los derechos reservados
                <br> <a href="..">Back</a>
            </p>
        </form>
    </body>
    <style>
    	section{	
    		margin-top: -20px;
    	}img{
    		border: #F08080 dotted; height: 70px;
    		background-color: white; 
    	}p{
    		font-size: small;
    	}tr.top{
    		background-color: black; color: white;
    	}th.fot{
    		border-top: groove;
    		font-size: small;
    	}tr.res:hover{
    		background-color: gray;
    	}
    </style>
</html>