<template>
  <div class="page_container">
    <horizontal-navbar />
    <vertical-navbar />
    <div class="fixed-div">
      <div class="logo_holder">
        <q-img src="../assets/Logo.svg" class="logo"></q-img>
      </div>
      <div class="ac_container">
        <div class="ac_text">Account Balance</div>
        <div class="ac_amount">
          <span class="amount_box"
            ><span class="dollar_box">$$</span> <b>3,000</b></span
          >
          <q-btn
            flat
            @click="openAddForm = true"
            class="add_btn"
            icon="add_circle"
            label="New Card"
            no-caps
          ></q-btn>
        </div>
      </div>
      <q-dialog v-model="openAddForm" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Your Name</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              v-model="name"
              autofocus
              @keyup.enter="(openAddForm = false), addCard({ name: name })"
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn
              flat
              label="Add Card"
              @click="addCard({ name: name })"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <div class="tab_container">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          align="left"
          :active-color="$q.screen.lt.sm ? 'white' : 'black'"
          indicator-color="info"
          :breakpoint="0"
          no-caps
        >
          <q-tab class="tab-option" name="myCards" label="My Debit Cards" />
          <q-tab name="companyCards" label="All Company Cards" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="tab_panel">
          <q-tab-panel name="myCards">
            <div class="carousel rounded-borders">
              <div class="carousel-div">
                <q-carousel
                  v-model="slide"
                  swipeable
                  animated
                  :navigation-position="navPos"
                  navigation
                  height="300px"
                  class="bg-transparent text-white"
                >
                  <template v-slot:navigation-icon="{ active, onClick }">
                    <q-btn
                      v-if="active"
                      size="lg"
                      flat
                      class="active_carousel"
                      @click="onClick"
                    />
                    <q-btn
                      v-else
                      size="sm"
                      class="not_active_carousel"
                      flat
                      @click="onClick"
                    />
                  </template>
                  <q-carousel-slide
                    v-for="(card, key) in cards_data"
                    :key="key"
                    :name="key"
                    :card="card"
                    class="column no-wrap carousel-slide"
                  >
                    <card-template :card="card" :id="key" />
                  </q-carousel-slide>
                </q-carousel>

                <card-options
                  v-if="$q.screen.gt.sm"
                  class=""
                  :slide="active_slide"
                />
              </div>
              <div class="transaction-details">
                <div class="card-details-holder">
                  <q-expansion-item v-model="expanded" class="card-details">
                    <template v-slot:header>
                      <q-item-section avatar>
                        <q-avatar>
                          <img
                            src="../assets/Group11889.svg"
                            style="height: 25px; width: 25px"
                          />
                        </q-avatar>
                      </q-item-section>

                      <q-item-section><b> Card Details</b> </q-item-section>
                    </template>
                    <q-card>
                      <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem, eius reprehenderit eos corrupti commodi
                        magni quaerat ex numquam, dolorum officiis modi facere
                        maiores architecto suscipit iste eveniet doloribus ullam
                        aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                  <q-expansion-item
                    v-model="expandedTransaction"
                    class="card-details"
                  >
                    <template v-slot:header>
                      <q-item-section avatar>
                        <q-avatar>
                          <img
                            src="../assets/Group11889-1.svg"
                            style="height: 25px; width: 25px"
                          />
                        </q-avatar>
                      </q-item-section>

                      <q-item-section
                        ><b> Recent Transactions</b>
                      </q-item-section>
                    </template>
                    <q-card class="cards-holder">
                      <transaction-template />
                      <transaction-template />
                      <transaction-template />
                      <transaction-template />
                      <transaction-template />
                    </q-card>
                    <div class="all-transaction">
                      view all card transactions
                    </div>
                  </q-expansion-item>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="companyCards">
            <div class="text-h6">All Company Cards</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
    <div v-if="$q.screen.lt.sm" class="card-option-holder">
      <card-options class="" :slide="active_slide" />
      <div class="card-details-holder">
        <q-expansion-item v-model="expanded" class="card-details">
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar>
                <img
                  src="../assets/Group11889.svg"
                  style="height: 25px; width: 25px"
                />
              </q-avatar>
            </q-item-section>

            <q-item-section><b> Card Details</b> </q-item-section>
          </template>
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item v-model="expandedTransaction" class="card-details">
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar>
                <img
                  src="../assets/Group11889-1.svg"
                  style="height: 25px; width: 25px"
                />
              </q-avatar>
            </q-item-section>

            <q-item-section><b> Recent Transactions</b> </q-item-section>
          </template>
          <q-card class="cards-holder">
           
            <transaction-template />
            <transaction-template />
            <transaction-template />
            <transaction-template />
            <transaction-template />
          </q-card>
          <div class="all-transaction">view all card transactions</div>
        </q-expansion-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CardOptions from "src/components/CardOptions.vue";
import CardTemplate from "src/components/CardTemplate.vue";
import HorizontalNavbar from "src/components/Navbar/HorizontalNavbar.vue";
import TransactionTemplate from "src/components/TransactionTemplate.vue";
import { defineComponent } from "vue";
import VerticalNavbar from "src/components/Navbar/VerticalNavbar.vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      tab: "myCards",
      navPos: "bottom",
      slide: "ID1",
      active_slide: "ID1",
      name: null,
      openAddForm: false,
      expanded: false,
      expandedTransaction: false,
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
  components: {
    HorizontalNavbar,
    CardTemplate,
    CardOptions,
    TransactionTemplate,
    VerticalNavbar,
  },
  watch: {
     slide: function () {
      this.setActiveCard();
      this.updateActiveCard({ slide: this.slide });
    },
    active_card_name: function () {
      this.active_slide = this.active_card_name
      this.slide = this.active_card_name
    },
  },
  created() {
    this.setActiveCard();
  },
  computed: {
    ...mapGetters("cards", ["cards_data", 'active_card_name']),
  },
  methods: {
    ...mapActions("cards", [ "addCard", 'updateActiveCard']),
    setActiveCard() {
      this.active_slide = this.slide;
    },
  },
});
</script>
<style>
.all-transaction {
  padding: 10px;
  background: rgba(237, 255, 245, 1);
  color: rgba(1, 209, 103, 1);
  text-align: center;
}
.cards-holder {
  padding: 0 10px;
}
.add_btn {
  color: #23cefd;
  font-weight: bold;
  padding: 0;
}
.card-details-holder {
  width: 100%;
  height: 100%;
  padding: 20px;
}
.card-details {
  border: 1px solid #f5f5f5;
  background: #edf3ff;
  border-radius: 5px;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.04);
  margin-bottom: 20px;
}
.q-carousel--navigation-bottom.q-carousel--with-padding .q-carousel__slide {
  padding-bottom: 20px;
}
.tab-option {
  margin: 0 20px;
}
.fixed-div {
  position: fixed;
  width: inherit;
}
.card-option-holder {
  width: 100%;
  padding-bottom: 100px;
  background: white;
  border-radius: 15px 15px 0 0;
}
.q-tab {
  padding: 0;
}
.on-left {
  margin-right: 6px;
}
.pad-number .q-tab {
  padding: 0;
  margin: 0 20px 0 20px;
}
.q-tab-panels {
  background: rgb(255 255 255 / 0%);
}
.page_container {
  width: 100vw;
  height: 100vh;
  background: #0c365a;
  position: fixed;
  overflow-y: scroll;
}
.card-option-holder {
  position: relative;
  margin-top: 480px;
}
.logo_holder {
  width: 100%;
  float: left;
  text-align: right;
  padding: 10px 20px;
}
.logo {
  width: 25px;
  height: 25px;
}
.ac_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}
.ac_text {
  color: white;
  font-size: 14px;
}
.ac_amount {
  font-size: 24px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.amount_box {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 120px;
  justify-content: space-between;
}
.dollar_box {
  width: 50px;
  height: 22px;
  border-radius: 5px;
  background: #01d167;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
.tab_container {
  padding: 20px 0;
}
.tab_panel {
  height: 100%;
}
.active_carousel {
  background: rgba(1, 209, 103, 1);
  min-height: 10px;
  padding: 0;
  width: 20px;
  border-radius: 26px;
}
.not_active_carousel {
  background: rgba(1, 209, 103, 1);
  min-height: 10px;
  padding: 0;
  width: 10px;
  opacity: 10%;
  border-radius: 16px;
}
.carousel-div {
  width: 100%;
}
@media only screen and (min-width: 600px) {
  .page_container {
    background: white;
  }
  .carousel-div {
    width: 350px;
  }
  .fixed-div {
    width: calc(100% - 300px);
    right: 0;
    height: 100%;
    overflow: scroll;
    padding: 30px;
  }
  .ac_text {
    color: black;
  }
  .ac_amount {
    color: black;
  }
  .logo {
    display: none;
  }
  .add_btn {
    padding: 5px 10px;
    color: white;
    background: rgba(50, 91, 175, 1);
  }
  .card-option-holder {
    width: calc(100% - 300px);
    right: 0;
  }
  .carousel {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.08);
    padding: 30px;
    display: flex;
    flex-direction: row;
  }
  .transaction-details {
    width: calc(100% - 350px);
  }
  .card-details-holder {
    padding: 30px 0 20px 30px;
  }
}
</style>
