/*document.getElementById("text-button").onclick = function() {
  document.getElementById("text").innerHTML = "クリックされた！";
};*/

//ボタンをクリックしてじょうすけの詳細を表示
/*document.getElementById("output").style.display ="none";

function OnButtonClick() {
  var temp_jo = document.getElementById("output");
  if (temp_jo.style.display==="none") {
    //console.log("22");
    temp_jo.style.display="block";

  } else if (temp_jo.style.display==="block") {
    //console.log("11");
    temp_jo.style.display="none";
  }

}*/


//ボタンをクリックしてじょうすけの詳細を表示
document.getElementById("jo_detail").style.display ="none";
document.getElementById("btn_jo").style.display ="block";
document.getElementById("igy_detail").style.display ="none";
document.getElementById("btn_igy").style.display ="block";

function OnButtonClick_Jo() {
  var temp_jo = document.getElementById("jo_detail");
  var temp_btn_jo = document.getElementById("btn_jo");
  if (temp_jo.style.display==="none") {
    //console.log("22");
    temp_jo.style.display="block";
    temp_btn_jo.style.display="none";

  } else if (temp_jo.style.display==="block") {
    //console.log("11");
    temp_jo.style.display="none";
  }
}

function OnButtonClick_Jo_Reverse() {
  var temp_jo = document.getElementById("jo_detail");
  var temp_btn_jo = document.getElementById("btn_jo");

  temp_jo.style.display="none";
  temp_btn_jo.style.display="block";
}


//ボタンをクリックしてイギーの詳細を表示


function OnButtonClick_Igy() {
  var temp_igy = document.getElementById("igy_detail");
  var temp_btn_igy = document.getElementById("btn_igy");
  if (temp_igy.style.display==="none") {
    //console.log("22");
    temp_igy.style.display="block";
    temp_btn_igy.style.display="none";

  } else if (temp_igy.style.display==="block") {
    //console.log("11");
    temp_igy.style.display="none";
  }
}

function OnButtonClick_Igy_Reverse() {
  var temp_igy = document.getElementById("igy_detail");
  var temp_btn_igy = document.getElementById("btn_igy");

  temp_igy.style.display="none";
  temp_btn_igy.style.display="block";
}
