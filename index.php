<html>
  <head>
    <title>Vogel memory</title>
    <script src="script.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body onload="startMemo()">
    <div id="options">
      <button onclick="restart()">Herstarten</button><br>
      Aantal vakjes:
      <select id="av" onchange="restart()">
        <option value="16">16</option>
        <option value="20">20</option>
        <option value="24">24</option>
        <option value="28">28</option>
        <option value="30">30</option>
        <option value="36">36</option>
        <option selected value="42">42</option>
      </select><p>
        Vind je de afbeeldingen mooi?<br>Ga voor meer naar <a href="http://elwinvanderkolk.nl">elwinvanderkolk.nl</a>!
      </p>
    </div>
    <div id="wrapper">
      <div id="hider"></div>
    </div>
  </body>
</html>	