<template>
  <div class="transaction-holder">
    <div class="trans-img-holder">
      <div class="circle-div">
        <q-img src="../assets/file-storage.svg" class="trans-img" />
      </div>
    </div>
    <div class="trans-details-holder">
      <div class="trans-name"><b>Hamelys</b></div>
      <div class="trans-date">20 May 2020</div>
      <div class="trans-refund">
        <div class="refund-circle-div">
          <q-img
            src="../assets/business-and-finance.svg"
            class="trans-refund-img"
          />
        </div>
        Refund On debit card
      </div>
    </div>
    <div class="trans-price-holder">+$$ 10.5 ></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.transaction-holder {
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgb(0 0 0 / 9%);
  flex-direction: row;
}
.trans-img-holder {
  width: 60px;
  padding: 10px 10px 10px 5px;
}
.circle-div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 157, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.refund-circle-div {
  width: 30px;
  height: 20px;
  border-radius: 10px;
  background: rgba(50, 91, 175, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}
.trans-details-holder {
  width: calc(100% - 140px);
  padding: 10px 0;
}
.trans-name {
  font-size: 13px;
}
.trans-date {
  color: grey;
  font-size: 12px;
}
.trans-price-holder {
  width: 80px;
  padding: 10px 0;
  color: rgba(1, 209, 103, 1);
  font-weight: bold;
}
.trans-refund {
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  font-size: 11px;
  font-weight: bold;
  color: rgba(50, 91, 175, 1);
  align-items: center;
}
.trans-img {
  width: 15px;
  height: 15px;
}
.trans-refund-img {
  width: 12px;
  height: 10px;
}
</style>
