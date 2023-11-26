<template>
    <div class="submit-form">
      <div v-if="!submitted">       

        <div class="form-group">
            <label for="inputCpf">Cpf:</label>
            <input type="text" v-model="funcionario.cpf" class="form-control" id="inputCpf">
        </div>

        <div class = "form-group">
        <label for="inputRg">Rg:</label>
            <input type="text" v-model="funcionario.rg" class="form-control" id="inputRg">
        </div>

        <div class = "form-group">
        <label for="inputNome">Nome:</label>
            <input type="text" v-model="funcionario.nome" class="form-control" id="inputNome">
        </div>

         <div class = "form-group">
        <label for="inputNome">Numero_celular:</label>
            <input type="text" v-model="funcionario.Numero_celular" class="form-control" id="inputNumero_celular">
        </div>

         <div class = "form-group">
        <label for="inputNome">Email:</label>
            <input type="text" v-model="funcionario.email" class="form-control" id="inputEmail">
        </div>

         <div class = "form-group">
        <label for="inputNome">Data_nascimento:</label>
            <input type="text" v-model="funcionario.data_nascimento" class="form-control" id="inputDataNascimento">
        </div>

         <div class = "form-group">
        <label for="inputNome">Endereço:</label>
            <input type="text" v-model="funcionario.endereco" class="form-control" id="inputEndereco">
        </div>

         <div class = "form-group">
        <label for="inputNome">Cep</label>
            <input type="text" v-model="funcionario.cep" class="form-control" id="inputCep">
        </div>

         <div class = "form-group">
        <label for="inputNome">Complemento:</label>
            <input type="text" v-model="funcionario.nome" class="form-control" id="inputNome">
        </div>

         <div class = "form-group">
        <label for="inputNome">Ctps:</label>
            <input type="text" v-model="funcionario.ctps" class="form-control" id="inputCtps">
        </div>

         <div class = "form-group">
        <label for="inputNome">Pis:</label>
            <input type="text" v-model="funcionario.pis" class="form-control" id="inputPis">
        </div>

        <div class="form-group">
            <label for="inputSenha">Senha:</label>
            <input type="password" v-model="funcionario.senha" class="form-control" id="inputSenha">
        </div>            


            
          
  
        <button @click="saveFuncionarios" class="btn btn-success">Salvar</button>
        <router-link to="/funcionarios" class="btn btn-success">Voltar</router-link>                

      </div>
  
      <div v-else>
        <h4>Dados enviados com sucesso !</h4>
        <button class="btn btn-success" @click="newFuncionario">Novo</button>
        <router-link to="/funcionarios" class="btn btn-success">Voltar</router-link>
      </div>
    </div>
  </template>

<script>

    import FuncionarioDataService from '../../services/FuncionarioDataService'
    

    export default {
        name: "addFuncionario",
        data(){
            return {
                funcionario: {indice: '', 
                                    cpf: '', 
                                    nome: '',
                                    data_nascimento: '',
                                    email: '',
                                    numero_celular: '',
                                    senha: '',
                                    pis: '', 
                                    ctps: '',                                                                        
                                    rg: '',  
                                    endereco: '',
                                    cep: '',
                                    },
                submitted: false
                
            }            
        },
        methods: {

            saveFuncionario(){

                var func = jQuery.extend({}, this.funcionario);//clona o this.novo_jogador e armazena na variavel jogador. dessa forma alteracoes em this.novo_jogador nao irao refletir em jogador.
                                                              

                if (func.cpf.trim().length > 0 && func.senha.trim().length > 0 ) {
                
                    FuncionarioDataService.create(func)
                    .then(response => {
                        
                        this.submitted = true;
                    })
                    .catch(e => {                        
                        alert("Erro ao tentar cadastrar. !!! " + e.message);

                    })

                }else{
                    alert('Formulário incompleto !!!');
                }

            },
            newFuncionario(){

                this.submitted = false;
                this.funcionario = {};
            },
           

        }
       
    }

</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>