<template>
    <div id="tab_aut">
     
       <div v-if="currentFuncionario" class="edit-form">
            <h3>Funcionario</h3>
            <form>
                <div class="form-group">
                    <label for="inputCpf">cpf:</label>
                    <input type="text" v-model="currentFuncionario.cpf" class="form-control" id="inputCpf">
                </div>

                <div class = "form-group">
                    <label for="inputRg">Rg:</label>
                    <input type="text" v-model="currentFuncionario.rg" class="form-control" id="inputRg">
                </div>

                <div class = "form-group">
                    <label for="inputNome">Nome:</label>
                    <input type="text" v-model="currentFuncionario.nome" class="form-control" id="inputNome">
                </div>

                <div class = "form-group">
                    <label for="inputNome">Numero_celular:</label>
                    <input type="text" v-model="currentFuncionario.Numero_celular" class="form-control" id="inputNumero_celular">
                </div>

                <div class = "form-group">
                    <label for="inputNome">Email:</label>
                    <input type="text" v-model="currentFuncionario.email" class="form-control" id="inputEmail">
                </div>

                <div class = "form-group">
                    <label for="inputNome">Data_nascimento:</label>
                    <input type="text" v-model="currentFuncionario.data_nascimento" class="form-control" id="inputDataNascimento">
                </div>

                <div class = "form-group">
                    <label for="inputNome">Endereço:</label>
                    <input type="text" v-model="currentFuncionario.endereco" class="form-control" id="inputEndereco">
                </div>

                <div class = "form-group">
                    <label for="inputNome">Cep</label>
                    <input type="text" v-model="currentFuncionario.cep" class="form-control" id="inputCep">
                </div>

                <div class = "form-group">
                    <label for="inputNome">Complemento:</label>
                    <input type="text" v-model="currentFuncionario.nome" class="form-control" id="inputNome">
                </div>

                <div class = "form-group">
                    <label for="inputNome">Ctps:</label>
                    <input type="text" v-model="currentFuncionario.ctps" class="form-control" id="inputCtps">
                </div>

                <div class = "form-group">
                    <label for="inputNome">Pis:</label>
                    <input type="text" v-model="currentFuncionario.pis" class="form-control" id="inputPis">
                </div>

                <div class="form-group">
                    <label for="inputSenha">Senha:</label>
                    <input type="password" v-model="currentFuncionario.senha" class="form-control" id="inputSenha">
                </div>            

            </form>
            <button class="badge badge-success" @click="updateFuncionario">Salvar</button>
            <button class="badge badge-danger mr-2" @click="deleteFuncionario">Delete</button>
            <button class="badge badge-danger mr-2" @click="voltar">Voltar</button>

            
            <p>{{ message }}</p>

       </div>
       <div v-else>
            <br />
            <p>Please click on a Funcionario...</p>
        </div>

                                          
    </div>
 </template>
 <script>
 
     import FuncionarioDataService from '../../services/FuncionarioDataService'
     import PatenteDataService from '../../services/PatenteDataService'
 
     export default{
      name:'editFuncionarios',
      data() {
             return {                
                 currentFuncionario: null,
                 message: ''
                 
             }
         },
         methods: {

            getFuncionario(cpf){

                FuncionarioDataService.get(cpf)
                .then(response => {
                    console.log(response.data);
                    this.currentFuncionario = response.data;
                    
                })
                .catch(e=> {
                    console.log(e);
                })
            },
           
            updateFuncionario(){

               FuncionarioDataService.update(this.currentFuncionario)
                .then(response => {
                    console.log('FuncionarioDataService.update');
                    this.message = 'Funcionario alterado com sucesso !';
                })
                .catch(e =>{
                    console.log(e);
                })
            },
            deleteFuncionario(){

                FuncionarioDataService.delete(this.currentFuncionario.cpf)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "funcionarios-list" });
                })
                .catch(e => {
                console.log(e);
                });
            },
            voltar(){
                this.$router.push({ name: "funcionarios-list" });
            }
         },
         mounted() {
            
            this.message = '';
            this.getFuncionario(this.$route.params.cpf);
         }
     }
 </script>
    
 <style scoped>

    .edit-form {
    max-width: 300px;
    margin: auto;
    }
     
 </style>