<template>
  <div class="card-container">
    <div class="show-number-holder">
      <div class="show-number">
        <q-icon name="visibility" size="20px" class="dot" /> Show Card Number
      </div>
    </div>
    <div
      class="card_holder"
      :style="card.freeze ? '  background: #757575;' : '  background: #01d167;'"
    >
      <div class="img-holder">
        <q-img src="../assets/Logo-2.svg" class="img"></q-img>
      </div>
      <div class="name-holder">{{ card.name }}</div>
      <div class="card-number">
        <div class="digits">
          <q-icon name="fiber_manual_record" size="10px" class="dot" />
          <q-icon name="fiber_manual_record" size="10px" class="dot" />
          <q-icon name="fiber_manual_record" size="10px" class="dot" />
          <q-icon name="fiber_manual_record" size="10px" class="dot" />
        </div>
        <div class="digits">
          <q-icon name="fiber_manual_record" size="10px" class="dot" />
          <q-icon name="fiber_manual_record" size="10px" class="dot" />
          <q-icon name="fiber_manual_record" size="10px" class="dot" />
          <q-icon name="fiber_manual_record" size="10px" class="dot" />
        </div>
        <div class="digits">
          <q-icon name="fiber_manual_record" size="10px" class="dot" />
          <q-icon name="fiber_manual_record" size="10px" class="dot" />
          <q-icon name="fiber_manual_record" size="10px" class="dot" />
          <q-icon name="fiber_manual_record" size="10px" class="dot" />
        </div>
        <div class="digits">{{ trimNumber(card.number) }}</div>
      </div>
      <div class="date-cvv-holder">
        <div class="date-holder">Thru: {{ card.date }}</div>
        <div class="cvv-holder">CVV : ✶✶✶</div>
      </div>
      <div class="visa-img-holder">
        <q-img src="../assets/VisaLogo.svg" class="visa-img"></q-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTemplate",
  props: ["card", "id"],
  methods: {
    trimNumber(number) {
      return number.toString().substr(12, 15);
    },
  },
};
</script>

<style>
.card-container {
  width: 100%;
  height: 250px;
}
.card_holder {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  display: inline-block;
}
.show-number-holder {
  display: flex;
  justify-content: end;
  margin-bottom: -11px;
  height: 40px;
}
.show-number {
  background: white;
  color: #01d167;
  padding: 4px 10px;
  border-radius: 5px;
  font-weight: bold;
}
.q-carousel__slide {
  padding: 0;
}
.img-holder {
  width: 100%;
  height: 50px;
  text-align: end;
  padding: 20px 20px 15px;
}
.visa-img-holder {
  width: 100%;
  height: 30px;
  text-align: end;
  padding: 0 20px;
}
.img {
  width: 76px;
  height: 21px;
}
.visa-img {
  width: 76px;
  height: 26px;
}
.name-holder {
  padding: 0 20px;
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;
}
.card-number {
  padding: 0 20px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  margin-top: 10px;
  font-family: sans-serif;
}
.digits {
  width: 60px;
  float: left;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  height: 20px;
  align-items: center;
}
.dot {
  margin-right: 2px;
}
.date-cvv-holder {
  display: flex;
  letter-spacing: 1px;
  width: 215px;
  font-weight: bold;
  justify-content: space-between;
  padding: 10px 20px 0;
  font-family: sans-serif;
}
@media only screen and (min-width: 600px) {
}
</style>
