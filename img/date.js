const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name = month[d.getMonth()];
if (name == "October")
{
	document.write('<link rel="stylesheet" href="css/halloween/style.min.css">');
}
else if (name == "December")
{
	document.write('<link rel="stylesheet" href="css/xmas/style.min.css">');
	document.write('<script src="js/snow.js"></script>');
}
else if (name == "July")
{
	document.write('<link rel="stylesheet" href="css/bday/style.min.css">');
	document.write('<script src="js/confetti.js" defer></script>');
}
else
{
	document.write('<link rel="stylesheet" href="css/style.min.css">');
}