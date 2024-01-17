let documento = document.querySelector("html");
let head = document.createElement("head")
head.innerHTML
`
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Joel Kukin Freelancer</title>
<!-- STYLE LINKS -->
<!-- Boostrap -->
<style></style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"

  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"

  crossorigin="anonymous">
<!-- Main.css -->
<!--  -->
<link rel="stylesheet" href="Styles/Custom.css">

`

documento.insertBefore(head, documento.firstChild);