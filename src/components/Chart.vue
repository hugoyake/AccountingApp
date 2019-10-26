<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="light-green" dark v-on="on">financial analysis</v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Chart Report</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="reDraw()">Reload</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-divider></v-divider>
          <v-container max-width="500" md-4>
            <v-row>
              <v-col cols="12" sm="4">
                <imporPie :chart-data="imporPieData"></imporPie>
              </v-col>
              <v-col cols="12" sm="4">
                <eventPie :chart-data="eventPieData"></eventPie>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import imporPie from './charts/imporChart'
import eventPie from './charts/eventChart'
import events from '@/event/event.json'
import quadrants from '@/event/quadrant.json'
import { mapGetters } from 'vuex'

const imporArr = []
for(let i in quadrants.lists){
  imporArr.push(quadrants.lists[i].quadrant)
}

const eventArr = []
for(let i in events.lists){
  eventArr.push(events.lists[i].event)
}

export default {
	data() {
		return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,

      imporPieData: {},
      eventPieData: {}
		}
  },
  computed: {
    ...mapGetters([
      'chartEventData',
      'chartQuadrantData'
    ])
  },  
	mounted() {
		this.reDraw()
	},
	methods: {
		reDraw() {
      this.eventPieData = {
        labels: imporArr,
 				datasets: [{
   				label: '',   			
   				backgroundColor: ['#F44336', '#FF9800', '#2196F3', '#4CAF50'],
   				data: this.chartQuadrantData
         }],
        options: {
          
        }      
      }
			this.imporPieData = {
        labels: eventArr,
 				datasets: [{
   				label: '',   			
   				backgroundColor: ['#FFC107', '#FFEB3B', '#E91E63', '#CDDC39', '#009688', '#00BCD4', '#03A9F4', '#3F51B5'],
   				data: this.chartEventData
         }],
        options: {
          
        }        
			}
		}
	},
	components: {
    imporPie,
    eventPie
	}
}
</script>


