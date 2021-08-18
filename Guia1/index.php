<html>
    <head>
        <title>Inicio</title>
    </head>
    <body>
        <header>
            <h1 align="center">Modificacion de un Producto<br><img src="./img.png"></h1>
        </header>
        <form action="index.php" method="post">
            <section>
                <h4 align="center">
                	Escribe el codigo del producto que deseas ver <input class="box_code" type="text" name="code_found" placeholder="P000">
                	<input type="submit" name="btn_Env" value="Solicitar">
                </h4>
            </section>
<?php 
error_reporting(0);
	$connect = mysqli_connect('localhost', 'root', '', 'guia1');
	if(isset($_POST['btn_Env'])){
		$code_found = $_POST['code_found'];
		$obj = "select * from product 
								where code=".$code_found.";";
		$ejec=mysqli_query($obj, $connect); 
	/*while($res=mysqli_fetch_array($ejec)){
		echo "<script>
        alert('Se han solicitado Ambas Tablas');
    </script>";
	}
		while($res=mysqli_fetch_array($ejec)) {*/
			echo'<table align="center">
				<tr class="top"> <th colspan="2"> Datos del Producto </th></tr>
				<tr class="res"> <th align="right">Codigo:</th> <td><input type="text" value="'.$res['code'].'"> </td> </tr>
				<tr class="res"> <th align="right">Nombre:</th> <td><input type="text" value="'.$res["des"].'"> </td> </tr>
				<tr class="res"> <th align="right">Precio:</th> <td><input type="text" value="'.$res["price"].'"> </td> </tr>
				<tr class="res"> <th align="right">Stock Actual:</th> <td><input type="text" value="'.$res["stock_act"].'"> </td> </tr>
				<tr class="res"> <th align="right">Stock Minimo:</th> <td><input type="text" value="'.$res["stock_min"].'"> </td> </tr>*/
				<tr> <th colspan="2" class="fot"> <input type="reset"> <input type="submit" value="Actualizar"> </th></tr>
			</table>';
		
		mysqli_close($connect);
	}
?>
            <p align="center">
                ©2021 Cristopher Sic | Todos los derechos reservados
            </p>
            <br>
        </form>
    </body>
    <style>
    	section{	
    		margin-top: -20px;
    	}img{
    		border: #F08080 dotted; height: 320px;
    	}input{
    		text-decoration: none; 
    	}p{
    		font-size: small;
    	}tr.top{
    		background-color: black; color: white;
    	}th.fot{
    		border-top: groove;
    	}tr.res:hover{
    		background-color: gray;
    	}
    </style>
</html>