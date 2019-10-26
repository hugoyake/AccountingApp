<template>
  <div class="home">
    <v-app id="inspire">

      <v-card color="light-blue" dark>

        <v-img height="200" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        </v-img>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="12" sm="3" md="3">
                <v-text-field label="Amount" prefix="$" filled color="blue-grey lighten-2" v-model="newAmount"
                  :rules="amountRules">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="3" md="3">
                <v-combobox :items="events" item-text="event" label="Event" filled color="blue-grey lighten-2"
                  v-model="newEvent" :rules="eventRules" required>
                </v-combobox>
              </v-col>
              <v-col cols="12" sm="3" md="3">
                <v-combobox :items="quadrants" item-text="quadrant" label="Importance" filled
                  color="blue-grey lighten-2" v-model="newColor" :rules="colorRules" required>
                </v-combobox>
              </v-col>
              <v-col cols="12" sm="3" md="3">
                <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px" filled >
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="date" label="Picker without buttons" prepend-icon="event" readonly v-on="on" :rules="dateRules" required>
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="12">
                <v-textarea class="mx-2" label="Note" rows="1" prepend-icon="comment" v-model="newDetail">
                </v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-divider></v-divider>

        <v-card-actions>          
          <v-col cols="12" sm="2">            
              
            <Chart />
                      
          </v-col>

          <v-spacer></v-spacer>
          <v-col cols="12" sm="2">
            <v-btn color="yellow darken-4" @click="submitCard">
              <v-icon left>add</v-icon>
              submit
            </v-btn>
          </v-col>
          <v-col cols="12" sm="2">
            <v-btn color="error" class="mr-4" @click="reset">
              Reset Form
            </v-btn>
          </v-col>          
        </v-card-actions>
      </v-card>
     
      <HelloWorld />
      
    </v-app>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Chart from '@/components/Chart.vue'
import events from '@/event/event.json'
import quadrants from '@/event/quadrant.json'
import { mapState, mapMutations } from 'vuex'


export default {
  name: 'home',
  components: {
    HelloWorld, 
    Chart
  },
  data(){
    return {
     

      valid: true,
      newAmount: '',
      amountRules:  [
        v => !!v || 'Amount is required',
        v => /^[0-9]/.test(v) || 'Amount must be a number',
      ],
      newEvent: '',
      eventRules: [
        v => !!v || 'Event is required'        
      ],
      newColor: '',
      colorRules: [
        v => !!v || 'Importance is required'        
      ],        
      date: new Date().toISOString().substr(0, 10),
      dateRules: [
        v => !!v || 'Date is required' 
      ],
      events: events.lists,
      quadrants: quadrants.lists,
      newDetail: '',
      menu2: false
    }
  },
  computed:{
    ...mapState([
      'lists'
    ]),
    amount: function(){
      return parseInt(this.newAmount)
    }
  },
  methods: {
    ...mapMutations([
      'ADD_CARD'
    ]),
    reset: function(){
       this.$refs.form.reset()
    },
    submitCard: function(){
      const amount = parseInt(this.newAmount)
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
      if(this.newEvent == '' || this.newColor == '' || isNaN(amount) == true){ /*不能用三個等於*/
     
      }else{
        /*不知道為何，mutation無法傳遞多個參數，只能透過傳遞一個陣列的方式進行*/      
        const arr = [amount,this.newDetail,this.newColor.color,this.newEvent.icon,this.date,this.newEvent.event ]
        this.ADD_CARD(arr)
      }    
    }
  }
}
</script>

<style lang="scss">

</style>
