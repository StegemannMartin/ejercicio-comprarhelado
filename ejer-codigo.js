
alert("¿Cual es el helado más caro que puedo comprar con el dinero que tengo, y cuento me sobra?");

dineromartin = prompt("Hola Martin, cuanto dinero tienes para comprar helados?");
dineropau = prompt("Hola Paula, cuanto dinero tienes para comprar helados?");
dinerobelen = prompt("Hola Belen, cuanto dinero tienes para comprar helados?");

dineromartin = parseInt(dineromartin);
dineropau = parseInt(dineropau);
dinerobelen = parseInt(dinerobelen);

if (dineromartin >= 0.6 && dineromartin < 1) {
	alert("Comprate el helado de agua,Martin");
	alert("Y te sobran " + (dineromartin - 0.6));
}

else if (dineromartin >= 1 && dineromartin < 1.6) {
	alert("Comprate el helado de crema,Martin");
	alert("Y te sobran " + (dineromartin - 1));
}
else if (dineromartin >= 1.6 && dineromartin < 1.7) {
	alert("Comprate el helado de bombon heladix,Martin");
	alert("Y te sobran " + (dineromartin - 1.6));
}

else if (dineromartin >= 1.7 && dineromartin < 1.8) {
	alert("Comprate el helado de bombon heladovich,Martin");
	alert("Y te sobran " + (dineromartin - 1.7));
}

else if (dineromartin >= 1.8 && dineromartin < 2.9) {
	alert("Comprate el helado de bombon helardo,Martin");
	alert("Y te sobran " + (dineromartin - 1.8));
}
else if (dineromartin >= 2.9 ) {
	alert("Comprate el potecito con confites o el pote de 1/4,Martin");
	alert("Y te sobran " + (dineromartin - 2.9));
} else {
	alert("Lo siento, no te alcanza para ningun producto");
}





if (dineropau >= 0.6 && dineropau < 1) {
	alert("Comprate el helado de agua,Pau");
	alert("Y te sobran " + (dineropau - 0.6));
}

else if (dineropau >= 1 && dineropau < 1.6) {
	alert("Comprate el helado de crema,Pau");
	alert("Y te sobran " + (dineropau - 1));
}
else if (dineropau >= 1.6 && dineropau < 1.7) {
	alert("Comprate el helado de bombon heladix,Pau");
	alert("Y te sobran " + (dineropau - 1.6));
}

else if (dineropau >= 1.7 && dineropau < 1.8) {
	alert("Comprate el helado de bombon heladovich,Pau");
	alert("Y te sobran " + (dineropau - 1.7));
}

else if (dineropau >= 1.8 && dineropau < 2.9) {
	alert("Comprate el helado de bombon helardo,Pau");
	alert("Y te sobran " + (dineropau - 1.8));
}
else if (dineropau >= 2.9 ) {
	alert("Comprate el potecito con confites o el pote de 1/4,Pau");
	alert("Y te sobran " + (dineropau - 2.9));
} else {
	alert("Lo siento, no te alcanza para ningun producto");
}






if (dinerobelen >= 0.6 && dinerobelen < 1) {
	alert("Comprate el helado de agua,Belen");
	alert("Y te sobran " + (dinerobelen - 0.6));
}

else if (dinerobelen >= 1 && dinerobelen < 1.6) {
	alert("Comprate el helado de crema,Belen");
	alert("Y te sobran " + (dinerobelen - 1));
}
else if (dinerobelen >= 1.6 && dinerobelen < 1.7) {
	alert("Comprate el helado de bombon heladix,Belen");
	alert("Y te sobran " + (dinerobelen - 1.6));
}

else if (dinerobelen >= 1.7 && dinerobelen < 1.8) {
	alert("Comprate el helado de bombon heladovich,Belen");
	alert("Y te sobran " + (dinerobelen - 1.7));
}

else if (dinerobelen >= 1.8 && dinerobelen < 2.9) {
	alert("Comprate el helado de bombon helardo,Belen");
	alert("Y te sobran " + (dinerobelen - 1.8));
}
else if (dinerobelen >= 2.9 ) {
	alert("Comprate el potecito con confites o el pote de 1/4,Belen");
	alert("Y te sobran " + (dinerobelen - 2.9));
} else {
	alert("Lo siento, no te alcanza para ningun producto");
}








