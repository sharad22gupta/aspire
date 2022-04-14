<template>
  <div class="vr_container">
    <div class="logo-vr-option">
      <div class="logo-tab-content">
        <div class="logoIconImg">
          <q-img src="../../assets/Logo2.svg" class="logo_icon"></q-img>
        </div>
        <span class="text-grey q-mt-lg"
          >Trusted way of banking for 3,000+ SMEs and startups in
          Singapore</span
        >
      </div>
    </div>
    <div class="vr-option">
      <div class="tab-content">
        <div class="iconImg">
          <q-img src="../../assets/Logo-1.svg" class="home_icon"></q-img>
        </div>

        <span class="tab-name">Home</span>
      </div>
    </div>
    <div class="vr-option">
      <div class="tab-content">
        <div class="iconImg">
          <q-img src="../../assets/pay-1.svg" class="pay_icon"></q-img>
        </div>

        <span class="active_tab-name">Cards</span>
      </div>
    </div>
    <div class="vr-option">
      <div class="tab-content">
        <div class="iconImg">
          <q-img src="../../assets/Payments.svg" class="home_icon"></q-img>
        </div>

        <span class="tab-name">Payments</span>
      </div>
    </div>
    <div class="vr-option">
      <div class="tab-content">
        <div class="iconImg">
          <q-img src="../../assets/Credit.svg" class="home_icon"></q-img>
        </div>

        <span class="tab-name">Credit</span>
      </div>
    </div>
    <div class="vr-option">
      <div class="tab-content">
        <div class="iconImg">
          <q-img src="../../assets/user.svg" class="user_icon"></q-img>
        </div>

        <span class="tab-name">Profile</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerticalNavbar",
};
</script>

<style scoped>
.vr_container {
  width: 300px;
  height: 100vh;
  background: rgba(12, 54, 90, 1);
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 4;
}
.vr-option {
  width: 100%;
  height: 80px;
  position: relative;
}
.logo-vr-option {
  width: 100%;
  height: 150px;
  position: relative;
}
.tab-content {
  width: 100%;
  max-width: 300px;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 7px;
}
.logo-tab-content {
  width: 100%;
  max-width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 25px;
}
.logoIconImg {
  width: 150px;
}
.iconImg {
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab-name {
  font-size: 20px;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
}
.active_tab-name {
  font-size: 20px;
  height: 10px;
  color: #01d167;
  display: flex;
  align-items: center;
}
.home_icon {
  height: 50px;
  width: 150px;
}
.home_icon {
  height: 30px;
  width: 30px;
}
.user_icon {
  height: 30px;
  width: 25px;
}
.pay_icon {
  height: 25px;
  width: 30px;
}
@media only screen and (max-width: 600px) {
  .vr_container {
    display: none;
  }
}
</style>
