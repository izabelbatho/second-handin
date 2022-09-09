const theDate = new Date();
        const today = theDate.getDay();
        if(today === 5 ){
            document.querySelector("#my_login_form").addEventListener("submit", (event) =>{
                event.preventDefault();
                alert("you cannot submit on Fridays")
                console.log("wrong day(Friday)");

            })

        }else if(today === 6){
            document.querySelector("#my_login_form").addEventListener("submit", (event) =>{
                event.preventDefault();
                alert("you cannot submit on Saturdays")
            console.log("wrong day(Saturday)");})

        }else if(today === 0){
            document.querySelector("#my_login_form").addEventListener("submit", (event) =>{
                event.preventDefault();
                alert("you cannot submit on Sundays")
            console.log("wrong day(Sunday)");})

        }else{
            document.querySelector("#email").addEventListener("blur",(event) =>{
                const newValue = event.target.value.trim();
                event.target.value = newValue;   
            
                if(!event.target.value.match("cphbusiness.dk")){
                    alert("The email has to be a cph business email")
                }
            })

            document.querySelector("#name").addEventListener("blur",(event) =>{
                const newValue = event.target.value.trim();
                event.target.value = newValue;


            })
            
            document.querySelector("#my_login_form").addEventListener("submit", (event) =>{
            event.preventDefault();
            console.log("right day");
            })}


