<template>
  <div>
    <!-- begin modal -->
    <modal name="modal1" draggable=".modal-content" classes="modal1" :resizable="true">
      <div class="modal-content">
      Lorem ipsum dolor sit amet,...
      </div>
      <!-- close button-->
      <button v-on:click="hide()">
          X
      </button>
      <!-- end close button -->
    </modal>
    <!-- end modal -->
    <button v-on:click="show()">show modal</button>
  </div>
</template>

<script>
import Vue from "vue";
import vmodal from 'vue-js-modal';
Vue.use(vmodal);

export default {
    data () {
      return {
        
      }
    },
    mounted: function() {
      console.log("modal mounted");
      this.hide();
    },
    methods: {
      show () {
        this.$modal.show('modal1');
      },
      hide () {
        this.$modal.hide('modal1');
      }
    }
  }
</script>