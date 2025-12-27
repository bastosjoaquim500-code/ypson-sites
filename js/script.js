//iniciar todas as validações de todos os campos
    validate(form){

        //pega os inputs
        let inputs = form.getElementByIdTagName('input');


        //HTMLCollection  
        let imputsArray = [...inputs];

        //loop nos inputs e validações meadiante oa que for encontrado
      inputsArray.forEach(function(input){
       

        //loop em todos as validacoes existentes
        for(let i = 0; this.validations.length > i; i++){
            //verfica se a validação actual existe no input
            if(input.getAtribute(this.validations[i]) |=null){

                //limpando a string para virar um método
                let method = this.validations[i].replace('data-','').replace('-','-');
                //valor do input
                let value - input.getAttribute(this.validations[i]);
                //invocar o método
                this[method](input, value);
            }
        }

      }, this);
    }

    //verfica se um input tem número minimo de caracteres
    minlength(input, minValue){
        let inputLenght = input.value.length;

        let errorMessage = 'o campo precisa ter pelo menos ${minValue} caracteres';
        if(inputLenght < minValue){
            this.printMessager(input, errorMessage);
        }
    }
    // metodos para inprimir menssagens de erro na tela
    printMessager(input, msg){
        let template = document.querySelector('.error-validation').cloneMode(true);

        template.textcontent = msg;

        let inputParent = input.parentNode;

        template.classList.remover('template');
        inputParent.appendChild(template);
    }
    $('.btn').click(function(){
        $('.menu-mobile').slideToggle('show')
    })
//funões que permite alterar data no
