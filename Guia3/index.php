<html>
    <head>
        <title>Inicio</title>
    </head>
    <body>
        <header>
            <h1 align="center">Mostrar Datos Con Img's</h1>
        </header>
        <form action="index.php" method="post">
<?php 
// error_reporting(0);
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
	if(($num%$pag)>0) $end++;
	for ($i=0; $i < $end; $i++) { 
		if(isset($_GET['pagina'.$i])){
			$nPag =+$i;
		}else{
			$nPag = 3;
		}
	}
	$first = $nPag*$pag;
	$select = "SELECT * from product limit $first, $pag";
	$obj = mysqli_query($connect, $select);
	if ($num > 0){
		while ($res=mysqli_fetch_array($obj)) { 
					echo '
						<tr class="res">
							<td>'.$res["code"].'</td><td>'.$res["des"].'</td><td>'.$res["price"].'</td><td>'.$res["stock_act"].'</td><td>'.$res["stock_min"].'</td> <td> <img src="../Imgs/Guia3/'.$res["des"].'.png"> </td>
						</tr>';
		}
	}
	echo '
			<tr class="fot">
				<th colspan="6" align="center" class="fot">
						Pagina N°'.$nPag.'<br>';
		for ($i=0; $i < $end; $i++) { 
			if($i == $nPag){
				echo '- &nbsp; <input type="submit" formmethod="get" name="pagina'.$i.'" value="'.$i.'"> &nbsp; -';
			}else{ ?>
				<input type="submit" formmethod="get" name="pagina<?php echo $i?>" value="<?php echo $i?>">
<?php		}
		}
	echo '		</th>
			</tr>
		</table>';
?>
            <p align="center">
                ©2021 Cristopher Sic | Todos los derechos reservados
            </p>
        </form>
    </body>
    <style>
    	section{	
    		margin-top: -20px;
    	}img{
    		border: #F08080 dotted; height: 70px;
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