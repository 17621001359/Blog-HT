<template>
  <div 
    class="title-page"
    style="backgroundImage: url('./title_page.jpg')"
  > 
    <div class="overlay"></div>
    <div style="z-index: 1">
      <h1 class="title-page-slogan">
        桃子汽水's Blog
      </h1>
      <h2 class="title-page-sub">
        if（bool学习==false）bool落后=true；不断的学习，我们才能不断的前进。
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.title-page {
  max-width: 100%;
  height: auto;
  padding: 8rem 0 ;
  display: flex;
  justify-content: center;
  align-items: center;

  background: no-repeat center center;
  background-color: #868e96;
  background-attachment: scroll;
  background-size: cover;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(33,37,41,0.2);
}

.title-page-slogan {
  text-align: center;  
  font-weight: 700;
  margin: 0 0 2rem 0;
  color: #fff;
  font-size: 2rem;
  padding: 0 30px;
  padding: 0;
}
.title-page-sub {
  text-align: center;  
  font-weight: 400;
  line-height: 1.68;
  font-size: 1.15em;
  padding: 0 30px;
  margin: 0;
  color: #fff;
}
.title-page-slogan p,
.title-page-sub p {
  margin: 0;
  padding: 0;
}

@media (min-width: 860px) {
  .title-page {
    height: 800px;
  }
  .title-page-slogan {
    font-size: 4rem;
  }
  .title-page-sub {
    font-size: 2rem;
  }
}
</style>
