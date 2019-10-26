import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists:[
      {"amount":1000,"event":"Lover&Friends","icon":"favorite","quadrant":"quadrant1","color":"red","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.","date":"2019-8-13"},
      {"amount":2500,"event":"Work","icon":"work","quadrant":"quadrant2","color":"orange","details":"second charge","date":"2019-6-3"}]
  },
  getters:{
    countCards: state => {
      let sum = 0
      for( let i in state.lists){        
        sum += state.lists[i].amount 
      }
      return sum
    },
    chartEventData: state => {
      const arr = []
      let sum1 = 0
      let sum2 = 0
      let sum3 = 0
      let sum4 = 0
      let sum5 = 0
      let sum6 = 0
      let sum7 = 0
      let sum8 = 0
      for( let i in state.lists){        
        if(state.lists[i].event == 'Education'){
          sum1 += state.lists[i].amount
        }else if(state.lists[i].event == 'Work'){
          sum2 += state.lists[i].amount
        }else if(state.lists[i].event == 'Lover&Friends'){
          sum3 += state.lists[i].amount
        }else if(state.lists[i].event == 'Daily'){
          sum4 += state.lists[i].amount
        }else if(state.lists[i].event == 'Entertainment'){
          sum5 += state.lists[i].amount
        }else if(state.lists[i].event == 'Interest'){
          sum6 += state.lists[i].amount
        }else if(state.lists[i].event == 'Exercises'){
          sum7 += state.lists[i].amount
        }else{
          sum8 += state.lists[i].amount
        }        
      } 
      arr.push(sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8)     
      return arr
    },
    chartQuadrantData: state => {
      const arr = []
      let sum1 = 0
      let sum2 = 0
      let sum3 = 0
      let sum4 = 0
      for( let i in state.lists){        
        if(state.lists[i].color == 'red'){
          sum1 += state.lists[i].amount
        }else if(state.lists[i].color == 'orange'){
          sum2 += state.lists[i].amount
        }else if(state.lists[i].color == 'blue'){
          sum3 += state.lists[i].amount
        }else{
          sum4 += state.lists[i].amount
        }        
      } 
      arr.push(sum1, sum2, sum3, sum4)
      return arr
    },
  },
  mutations: {
    ADD_CARD: function(state, arr){
      state.lists.push({
        "amount":arr[0], 
        "icon":arr[3], 
        "color":arr[2], 
        "details": arr[1], 
        "date":arr[4], 
        "event":arr[5]
      })      
    },
    REMOVE_CARD: function(state, card){
      state.lists.splice(card, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
