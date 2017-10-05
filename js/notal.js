//Bismillahirrahmanirrahim

var app = new Vue({
  el:'#plan',
  props:{
    minput: ''
  },
  data:{
    baslik: 'NOTPLAN',
    liste: [],
    id: 1004
  },
 
   methods:{
    
    notekle: function(){
      this.liste.push({id: this.id++, aciklama: this.minput })
      this.minput = ''
    },
     degersil: function(index){
      this.liste.splice(index, 1)
  },
   
    }
})