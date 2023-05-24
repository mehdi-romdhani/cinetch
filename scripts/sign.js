window.addEventListener("DOMContentLoaded", () => {
  const btnSignUp = document.querySelector("#sign-up");
  const btnSignIn = document.querySelector("#sign-in");
  const containerSign = document.querySelector(".container-sign");

  const fetchSignUp = async () => {
    const urlSign = await fetch("./src/View/ViewSignUp.php");
    const getUrlSign = await urlSign.text();

    containerSign.innerHTML = "";
    containerSign.innerHTML = getUrlSign;
  };

  const fetchSignIn = async () => {
    const urlSign = await fetch("./src/View/ViewSignIn.php");
    const getUrlSign = await urlSign.text();
    containerSign.innerHTML = getUrlSign;
  };

  async function insertUser(formDaTa) {
    const form = new FormData(formDaTa);
    const urlFetch = await fetch("./src/View/ViewSignUp.php?login", {
      method: "POST",
      body: form,
    });

    const responseFetch = await urlFetch.json();
    
    const messError = document.querySelector('#messError');
    console.log(messError);
    if(responseFetch['mailFail']){
        console.log(responseFetch);
        messError.innerText = responseFetch['mailFail'];

    }
    // console.log(responseFetch);
  }

  const connectUser = async (dataForm)=>{
    const form = new FormData(dataForm);
    const urlFetchConnect = await fetch("./src/View/ViewSignIn.php?connect",{
      method:"POST",
      body:form
    });

    const responseFetch = await urlFetchConnect.json();
    const messError = document.querySelector('#messConnect');

    console.log(responseFetch);
    // const messAuth = [];

    if(responseFetch['empty']){
      messError.innerText=responseFetch['empty'];
    }else if(responseFetch['user']){
      messError.innerText=responseFetch['user'];
    }else if(responseFetch['log']){
      messError.innerText=responseFetch['log'];
    }
  }

  btnSignUp.addEventListener("click", async () => {
    await fetchSignUp();

    let submit_form = document.querySelector("#signUp");
    console.log(submit_form);
    

    submit_form.addEventListener("submit", async (e) => {
      e.preventDefault();
      await insertUser(submit_form);
    });
  });

  btnSignIn.addEventListener("click", async () => {
    console.log("test");
    await fetchSignIn();

    let connectForm = document.querySelector('#signIn');
    connectForm.addEventListener('submit',async (e)=>{
      e.preventDefault();
      await connectUser(connectForm);
    })
  });
});
