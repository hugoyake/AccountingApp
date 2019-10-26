<template>
  <v-container>
    <h2 class="ma-12">Total spent by now: $ {{countCards}}</h2>   
    <v-divider class="mx-4" :inset="inset"></v-divider>
    <div v-for="(card, index) in lists" :key="card.id" class="ma-12">
      <v-card class="mx-auto" :color="card.color" dark max-width="800">
        <v-card-title class="">
          
          <span class="title font-weight-light mr-12">{{ card.date }}</span>
          
          <v-spacer></v-spacer>
          <v-tooltip bottom color="black">
            <template v-slot:activator="{ on }">
              <span v-on="on" class="justify-end"><v-icon large left>{{ card.icon }}</v-icon></span>
            </template>
            <span>{{ card.event }}</span>
          </v-tooltip>           
        </v-card-title>

        <v-row>
          <v-col cols="12" sm="12" class="justify-center">
            <v-card-text class="headline font-weight-bold text-center">
              " {{ card.details }} "
            </v-card-text>
            <v-card-text class="headline text-center">
              And it cost me :
              <v-icon>
                attach_money
              </v-icon>
              <span class="title font-weight-light mr-12">{{ card.amount }}</span>
            </v-card-text>            
          </v-col> 
        </v-row>
        
        <v-divider class="mx-4" dark></v-divider>
        <v-card-actions class="justify-end">
          <v-btn small depressed color="cyan" class="ma-2" @click="removeCard(index)">REMOVE</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'


export default {
  data(){
    return {

    }
  },
  computed: {
    ...mapState([
      'lists'
    ]),
    ...mapGetters([
      'countCards'
    ]),    
  },
  methods: {
    ...mapMutations([
      'REMOVE_CARD'
    ]),
    removeCard: function(card){
      this.REMOVE_CARD(card)
    }
  }
};
</script>

<style lang="scss">
  .dividerHugo{
    height: 3px;
  }
</style>
