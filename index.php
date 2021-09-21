<html>
    <head>
        <title>Inicio General</title>
    </head>
    <body>
        <header>
            <h1 align="center">Acciones A Realizar<br><img src="./Imgs/option.png"></h1>
        </header>
        <form action="index.php" method="post">
            <section>
                <h4 align="center">
                	Selecciona la Guia Que Deseas Visualizar
                	<select name="guia">
                		<option value="null"> -Select- </option>
                		<option value="Guia1">Guia 1</option>
                		<option value="Guia2">Guia 2</option>
                		<option value="Guia3">Guia 3</option>
                		<option value="Guia4">Guia 4</option>
                	</select>
                	<input type="submit" name="btn_Env" value="Visualizar">
                </h4>
            </section>
<?php 

	if(isset($_POST["btn_Env"])){
		$guia = $_POST["guia"];
		switch($guia){
			case 'null':
					echo '<script> alert("Debes de Solicitar una Guia!!"); </script>';
				break;
			case 'Guia1':
					echo '<script> location.href="./Guia1"; </script>';
				break;
			case 'Guia2':
					echo '<script> location.href="./Guia2"; </script>';
				break;
			case 'Guia3':
					echo '<script> location.href="./Guia3"; </script>';
				break;
			case 'Guia4':
					echo '<script> location.href="./Guia4"; </script>';
				break;
		}
	}
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
    		border: #F08080 dotted; height: 320px;
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