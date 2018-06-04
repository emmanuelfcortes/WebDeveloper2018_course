Modules

There are three ways to call Javascript in a html file:

1- Inline Script: this mode is acessed writing a Javascript code inside 
the html file. Using the tags <Script></Script>. The problem with this approach,
is the low code reusability and the global name space pollution.

example:
<html>
	<head>
	</head>
	<body>
			<Script>
				console.log("This is a Javascript code");
			</Script>
	</body>
</html>



/;

2- Script Tags: is using link the .js files with the html page. The problem
with this approach is the dependency resource, because the files have to be
additioned in page in a correct order, that the dependencys work;

example:

<html>
	<head>
	</head>
	<body>
			<script type="text/javascript" src="script1.js"></script>
			<script type="text/javascript" src="script2.js"></script>
			<script type="text/javascript" src="script3.js"></script>
			<script type="text/javascript" src="script4.js"></script>
	</body>
</html>

In this mode, we have to ensure that the script1.js dont depends of one function
in the others scripts, because he is load first. If occur this dependency, the page
will fail.

3- IIFE