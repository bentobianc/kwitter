  //Configurações de seu App Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBRLu_pIYwsE2sr0dmusttxdnh5U08_SZQ",
    authDomain: "kwitter-cf698.firebaseapp.com",
    databaseURL: "https://kwitter-cf698-default-rtdb.firebaseio.com",
    projectId: "kwitter-cf698",
    storageBucket: "kwitter-cf698.appspot.com",
    messagingSenderId: "850997407473",
    appId: "1:850997407473:web:3b3b498c8c46b274dec350"
  };
  
  
    // Inicializar Firebase
   firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";
  

  // Adiciona uma nova sala ao banco de dados
  function addRoom() {
    var room_name = document.getElementById("room_name").value;

    firebase.database().ref("/" + room_name).update({
        purpose: "adicionando nome da sala"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

  // Carrega os nomes das salas do banco de dados e exibe na tela
  function getData() {  firebase.database().ref("/").on('value', function(snapshot){ 
    document.getElementById("output").innerHTML = ""; snapshot.forEach(
      function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Nome da Sala - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  // Redireciona para a página de chat com o nome da sala selecionada
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  // Limpa os dados do usuário e redireciona para a página inicial
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  
