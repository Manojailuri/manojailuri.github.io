window.addEventListener("DOMContentLoaded", () => {
//  const websocket = new WebSocket("wss://web-production-96ed5.up.railway.app/");
  const UA = navigator.userAgent;

                    
   const loc = Navigator.geolocation;
   const uap = new UAParser();
   uap.setUA(UA);
   const result = uap.getResult();
   const d = new Date();
  
  //send logs
  // websocket.addEventListener("open", (ev) => {
  // websocket.send(JSON.stringify({"type": "send", "value": UA, "Browser":result.browser, "Device": result.device, "OS": result.os, "engine": result.engine.name, "architecture": result.cpu.architecture + document.referrer + d}));
   
   
   document.getElementById("maz").onclick = function() {reDirectchess()};
   
	function reDirectchess() {
		window.location.href = "https://www.chess.com/member/manojailuri";
		//websocket.send(JSON.stringify({"type": "send", "value": "chess redirected"}));
	}

	function reDirectscare() {
		window.location.href = "https://youtu.be/GMgsFZ4rkEI";
	}

   
   
   
   
  const device = result.device;

if (device.model == "SM-A226B" || device.model == "SM-G973U" || device.model == "M2101K7BI") {
	window.location.href = "https://manojailuri.github.io/wink";
} 
  
  
  
  
  });
  


//button
 //document.getElementById("button").onclick = function() {myclick()};
  function myclick() {
    const inpp = document.querySelector('#inputstr').value;
 //  websocket.send(JSON.stringify({"type": "send", "value": inpp}));
   
alert("Message Sent!");
document.getElementById("inputstr").value = "";
}




});


