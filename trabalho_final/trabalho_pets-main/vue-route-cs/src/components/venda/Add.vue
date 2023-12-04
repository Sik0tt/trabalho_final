<template>
    <div class="submit-form">
      <div v-if="!submitted">       

        <div class="form-group">
            <label for="inputObs">Observação:</label>
            <input type="text" v-model="venda.observacao" class="form-control" id="inputObs">
        </div>

        <div class = "form-group">
        <label for="inputVT">Valor Total:</label>
            <input type="text" v-model="venda.valor_total" class="form-control" id="inputVT">
        </div>

        <div class = "form-group">
        <label for="inputDC">Data da compra:</label>
            <input type="text" v-model="venda.data_compra" class="form-control" id="inputDC">
        </div>

          <!--Select Cliente-->
          <div class="form-group">
                <label for="selectCliente">Cliente:</label>
                <select v-model="venda.cliente" class="form-control" id="selectCliente" >
                    <option v-for="c in cliente" :key="c.cpf" v-bind:value="c">
                        {{ c.nome }}
                    </option>
                </select>
            </div>

            <!--Select Funcionario-->
            <div class="form-group">
                <label for="selectFuncionario">Funcionarios:</label>
                <select v-model="venda.funcionario" class="form-control" id="selectFuncionario" >
                    <option v-for="f in funcionario" :key="f.cpf" v-bind:value="f">
                        {{ f.nome }}
                    </option>
                </select>
            </div>            

         <!--Select Pet-->
         <div class="form-group">
                <label for="selectPet">Pet:</label>
                <select v-model="venda.pet" class="form-control" id="selectPet" multiple>
                    <option v-for="p in pet" :key="p.id" v-bind:value="p">
                        {{ p.id }}
                    </option>
                </select>
            </div>

  
        <button @click="saveVendas" class="btn btn-success">Salvar</button>
        <router-link to="/vendas" class="btn btn-success">Voltar</router-link>                 

      </div>
  
      <div v-else>
        <h4>Dados enviados com sucesso !</h4>
        <button class="btn btn-success" @click="newVenda">Novo</button>
        <router-link to="/vendas" class="btn btn-success">Voltar</router-link>
      </div>
    </div>
  </template>

<script>

    import VendaDataService from '../../services/VendaDataService'
    import FuncionarioDataService from '../../services/FuncionarioDataService'
    import ClienteDataService from '../../services/ClienteDataService'

    export default {
        name: "addVenda",
        data(){
            return {
                venda: { 

                    indice: '',
                    observacao: '',
                    valor_total: "",
                    data_compra: "",
                    cliente: [],
                    funcionario: [],
                    pet: []
                                    
                                },
                    submitted: false,
                    cliente: [],
                    funcionario: [],
                    pet: []
            }            
        },
        methods: {

            saveVenda(){

                var venda = jQuery.extend({}, this.venda);//clona o this.novo_jogador e armazena na variavel jogador. dessa forma alteracoes em this.novo_jogador nao irao refletir em jogador.                                                                   
                var cli = jQuery.extend({}, this.venda.cliente);//clona o this.novo_servico.cliente                  
                var func = jQuery.extend({}, this.venda.funcionario);//clona o this.novo_servico.funcionario
                var pet = jQuery.extend({}, this.venda.pet);//clona o this.novo_servico.pet

                venda.cliente.cpf = cli.cpf;
                venda.funcionario.cpf = func.cpf;
                venda.pet.id = pet.id;


                if (venda.observacao.trim().length > 0 ) {
                
                    VendaDataService.create(func)
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
            newVenda(){

                this.submitted = false;
                this.venda = {};
            },

            //List cliente
            listCliente() {
                ClienteDataService.list().then(response => {
                    console.log("Retorno do seviço ClienteDataService.list", response.status);
                    for (let c of response.data) {
                        this.cliente.push(c);
                    }
                }).catch(response => {
                    // error callback
                    alert('Não conectou no serviço ClienteDataService.list');
                    console.log(response);
                });
            },
            //List funcionario
            listFuncionario() {
                FuncionarioDataService.list().then(response => {
                    console.log("Retorno do seviço FuncionarioDataService.list", response.status);
                    for (let f of response.data) {
                        this.funcionario.push(f);
                    }
                }).catch(response => {
                    // error callback
                    alert('Não conectou no serviço FuncionarioDataService.list');
                    console.log(response);
                });
            },
            //List equipamento
            listEquipamento() {
                PetDataService.list().then(response => {
                    console.log("Retorno do seviço PetDataService.list", response.status);
                    for (let p of response.data) {
                        this.pet.push(p);
                    }
                }).catch(response => {
                    // error callback
                    alert('Não conectou no serviço EquipamentoDataService.list');
                    console.log(response);
                });
            }

        },

    }

</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>