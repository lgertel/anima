<template>
  <div class="container-center-horizontal">
    <div class="desktop-full screen">
      <div class="logo" :style="{ 'background-image': 'url(' + logo + ')' }">
        <div class="path-container">
          <img
            class="path"
            src="https://anima-uploads.s3.amazonaws.com/projects/6490a7587a44d675082dca0d/releases/6490acd6778f98d1d484b7b1/img/splash-2@2x.png"
            alt="Path"
          />
          <img class="path-1" :src="path2" alt="Path" />
        </div>
        <div class="type">
          <div class="letter-container">
            <img class="letter-1" :src="letter1" alt="Letter" /><img class="letter-2" :src="letter2" alt="Letter" />
          </div>
          <img class="letter-3" :src="letter3" alt="Letter" /><img class="letter-4" :src="letter4" alt="Letter" /><img
            class="letter-5"
            :src="letter5"
            alt="Letter"
          /><img class="letter" :src="letter6" alt="Letter" /><img class="letter-6" :src="letter7" alt="Letter" /><img
            class="letter-7"
            :src="letter8"
            alt="Letter"
          /><img class="letter-8" :src="letter9" alt="Letter" /><img class="letter" :src="letter10" alt="Letter" />
        </div>
      </div>
      <div class="flex-col-1">
        <div class="flex-col-2">
          <div class="flex-col-3">
            <div class="flex-col-4">
              <div class="flex-col-5">
                <div class="overlap-group4">
                  <div class="flex-row overpass-bold-white-16px">
                    <img class="group-3" :src="group3" alt="Group 3" />
                    <div class="work valign-text-middle">{{ work }}</div>
                    <div class="about valign-text-middle">{{ about }}</div>
                    <div class="contact">
                      <div class="contained-default">
                        <div class="label valign-text-middle">{{ label1 }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="overlap-group10">
                    <div class="headline-1 valign-text-middle">{{ headline1 }}</div>
                    <request />
                  </div>
                </div>
                <div class="flex-row-1">
                  <p class="title">
                    <span class="overpass-semi-bold-black-104px">{{ spanText1 }}</span
                    ><span class="span1">{{ spanText2 }}</span
                    ><span class="span2">{{ spanText3 }}</span
                    ><span class="overpass-semi-bold-black-104px">{{ spanText4 }}</span>
                  </p>
                  <div class="overlap-group-container">
                    <div class="overlap-group9">
                      <p class="subheader valign-text-middle overpass-semi-bold-black-36px">{{ subheader1 }}</p>
                      <p class="paragraph overpass-light-black-24px">{{ paragraph1 }}</p>
                    </div>
                    <div class="overlap-group5">
                      <p class="paragraph overpass-light-black-24px">{{ paragraph2 }}</p>
                      <div class="subheader valign-text-middle overpass-semi-bold-black-36px">{{ subheader2 }}</div>
                    </div>
                  </div>
                </div>
                <div class="overlap-group8">
                  <div class="bg"></div>
                  <div class="overlap-group">
                    <p class="subheader-2 valign-text-middle overpass-semi-bold-white-36px" v-html="subheader3"></p>
                    <div class="frame-2"></div>
                  </div>
                  <div class="overlap-group1">
                    <div class="rectangle-2"></div>
                    <p class="paragraph-3 overpass-light-black-24px">{{ paragraph3 }}</p>
                    <div class="subheader-3 valign-text-middle overpass-semi-bold-black-36px">{{ subheader4 }}</div>
                    <group2 />
                    <div class="rectangle-3"></div>
                  </div>
                  <div class="overlap-group2">
                    <div class="rectangle-2-1"></div>
                    <p class="paragraph-1 overpass-light-black-24px">{{ paragraph4 }}</p>
                    <div class="subheader-1 valign-text-middle overpass-semi-bold-black-36px">{{ subheader5 }}</div>
                    <group2 />
                  </div>
                  <div class="rectangle-2-2"></div>
                  <div class="overlap-group3">
                    <div class="rectangle-2-3"></div>
                    <p class="paragraph-1 overpass-light-black-24px">{{ paragraph5 }}</p>
                    <div class="subheader-1 valign-text-middle overpass-semi-bold-black-36px">{{ subheader6 }}</div>
                    <div class="frame-3" :style="{ 'background-image': 'url(' + frame3 + ')' }"></div>
                  </div>
                  <img
                    class="icon-play"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6490a7587a44d675082dca0d/releases/6490acd6778f98d1d484b7b1/img/vector-2-2.svg"
                    alt="icon-play"
                  />
                  <img
                    class="vector-1"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6490a7587a44d675082dca0d/releases/6490acd6778f98d1d484b7b1/img/vector-1-2.svg"
                    alt="Vector 1"
                  />
                  <div class="rectangle-7"></div>
                  <p class="subheader-4 valign-text-middle overpass-semi-bold-white-36px">{{ subheader7 }}</p>
                  <request :className="requestProps.className" />
                  <div class="title-1 overpass-semi-bold-white-104px">{{ title1 }}</div>
                  <p class="subheader-5 overpass-semi-bold-white-36px">{{ subheader8 }}</p>
                </div>
                <div class="title-2 overpass-semi-bold-black-104px">{{ title2 }}</div>
              </div>
              <div class="flex-row-2">
                <div class="flex-col-6">
                  <div class="ellipse"></div>
                  <div class="headline overpass-semi-bold-black-42px">{{ headline2 }}</div>
                </div>
                <p class="paragraph-4 overpass-light-black-24px">{{ paragraph6 }}</p>
              </div>
              <img
                class="vector-3"
                src="https://anima-uploads.s3.amazonaws.com/projects/6490a7587a44d675082dca0d/releases/6490acd6778f98d1d484b7b1/img/vector-3-2.svg"
                alt="Vector 3"
              />
            </div>
            <div class="flex-row-3">
              <div class="flex-col">
                <div class="ellipse"></div>
                <div class="headline overpass-semi-bold-black-42px">{{ headline3 }}</div>
              </div>
              <p class="paragraph-2 overpass-light-black-24px">{{ paragraph7 }}</p>
            </div>
            <img
              class="vector-4"
              src="https://anima-uploads.s3.amazonaws.com/projects/6490a7587a44d675082dca0d/releases/6490acd6778f98d1d484b7b1/img/vector-3-2.svg"
              alt="Vector 4"
            />
          </div>
          <div class="flex-row-4">
            <div class="flex-col">
              <div class="ellipse"></div>
              <div class="headline overpass-semi-bold-black-42px">{{ headline4 }}</div>
            </div>
            <p class="paragraph-2 overpass-light-black-24px">{{ paragraph8 }}</p>
          </div>
          <div class="overlap-group7">
            <div class="overlap-group11">
              <div class="title-3">
                <span class="overpass-semi-bold-black-97px">{{ spanText5 }}</span
                ><span class="span1">{{ spanText6 }}</span
                ><span class="overpass-semi-bold-black-97px">{{ spanText7 }}</span>
              </div>
              <p class="subheader-6 overpass-semi-bold-black-36px">{{ subheader9 }}</p>
            </div>
            <p class="subheader-7 overpass-light-black-24px" v-html="subheader10"></p>
          </div>
          <h1 class="title-4 overpass-semi-bold-black-104px">{{ title3 }}</h1>
        </div>
        <div class="flex-row-5">
          <img class="image-1" :src="image1" alt="image 1" /><img
            class="screen-shot-2021-06-07-at-1642-1"
            :src="screenShot20210607At16421"
            alt="Screen Shot 2021-06-07 at 16.42 1"
          /><img class="image-3" :src="image3" alt="image 3" />
        </div>
        <div class="overlap-group6">
          <div class="bg-1"></div>
          <div class="rectangle-1"></div>
          <div class="request">
            <div class="contained-default">
              <div class="label-1 valign-text-middle overpass-bold-white-18px">{{ label2 }}</div>
            </div>
          </div>
          <p class="subheader-8 valign-text-middle overpass-semi-bold-white-36px" v-html="subheader11"></p>
          <div class="headline-2 overpass-semi-bold-white-104px">{{ headline5 }}</div>
          <div class="group-1">
            <text-input-required
              :spanText1="textInputRequiredProps.spanText1"
              :spanText2="textInputRequiredProps.spanText2"
              :spanText3="textInputRequiredProps.spanText3"
              :textBlockProps="textInputRequiredProps.textBlockProps"
            />
            <text-input-required2
              :spanText1="textInputRequired21Props.spanText1"
              :johnDoe="textInputRequired21Props.johnDoe"
            />
            <text-input-required3
              :K1fHRH="textInputRequired3Props.K1fHRH"
              :textBlockProps="textInputRequired3Props.textBlockProps"
            />
            <text-input-required2
              :spanText1="textInputRequired22Props.spanText1"
              :johnDoe="textInputRequired22Props.johnDoe"
              :className="textInputRequired22Props.className"
            />
          </div>
          <img
            class="avenue-code-horizont"
            :src="avenueCodeHorizontalLogoClearWhite1"
            alt="Avenue Code - Horizontal Logo - Clear White 1"
          /><img class="design-logo3x-2" :src="designLogo3X2" alt="design logo@3x 2" />
          <p class="were-here-to-bridge overpass-light-white-16px">
            <span class="overpass-light-white-16px">{{ spanText8 }}</span
            ><span class="overpass-bold-white-18px">{{ spanText9 }}</span>
          </p>
          <p class="avenue-code-is-the-l overpass-light-white-16px">
            <span class="overpass-light-white-16px">{{ spanText10 }}</span
            ><span class="overpass-bold-white-18px">{{ spanText11 }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Request from "./Request";
import Group2 from "./Group2";
import TextInputRequired from "./TextInputRequired";
import TextInputRequired2 from "./TextInputRequired2";
import TextInputRequired3 from "./TextInputRequired3";
export default {
  name: "DesktopFull",
  components: {
    Request,
    Group2,
    TextInputRequired,
    TextInputRequired2,
    TextInputRequired3,
  },
  props: [
    "logo",
    "path2",
    "letter1",
    "letter2",
    "letter3",
    "letter4",
    "letter5",
    "letter6",
    "letter7",
    "letter8",
    "letter9",
    "letter10",
    "group3",
    "work",
    "about",
    "label1",
    "headline1",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "subheader1",
    "paragraph1",
    "paragraph2",
    "subheader2",
    "subheader3",
    "paragraph3",
    "subheader4",
    "paragraph4",
    "subheader5",
    "paragraph5",
    "subheader6",
    "frame3",
    "subheader7",
    "title1",
    "subheader8",
    "title2",
    "headline2",
    "paragraph6",
    "headline3",
    "paragraph7",
    "headline4",
    "paragraph8",
    "spanText5",
    "spanText6",
    "spanText7",
    "subheader9",
    "subheader10",
    "title3",
    "image1",
    "screenShot20210607At16421",
    "image3",
    "label2",
    "subheader11",
    "headline5",
    "avenueCodeHorizontalLogoClearWhite1",
    "designLogo3X2",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "requestProps",
    "textInputRequiredProps",
    "textInputRequired21Props",
    "textInputRequired3Props",
    "textInputRequired22Props",
  ],
};
</script>

<style>
.desktop-full {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  gap: 5034px;
  height: 8181px;
  overflow: hidden;
  width: 1440px;
}

.logo {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  gap: 6403px;
  height: 77px;
  margin-left: -5224px;
  margin-top: 7442.37px;
  min-width: 190px;
}

.path-container {
  height: 59px;
  margin-left: -6389px;
  margin-top: -1113.01px;
  position: relative;
  width: 48px;
}

.path {
  height: 33px;
  left: 11px;
  position: absolute;
  top: 11px;
  width: 26px;
}

.path-1 {
  height: 59px;
  left: 0;
  position: absolute;
  top: 0;
  width: 48px;
}

.type {
  align-items: flex-start;
  align-self: center;
  display: flex;
  margin-bottom: 0.18px;
  min-width: 120px;
}

.letter-container {
  height: 29px;
  margin-left: -6396px;
  margin-top: -1121.51px;
  position: relative;
  width: 22px;
}

.letter-1 {
  height: 29px;
  left: 0;
  position: absolute;
  top: 0;
  width: 12px;
}

.letter-2 {
  height: 20px;
  left: 11px;
  position: absolute;
  top: 9px;
  width: 11px;
}

.letter-3 {
  height: 21px;
  margin-top: -1113.37px;
  width: 10px;
}

.letter-4 {
  height: 21px;
  margin-left: 1px;
  margin-top: -1113.41px;
  width: 11px;
}

.letter-5 {
  height: 21px;
  margin-left: 2px;
  margin-top: -1112.84px;
  width: 11px;
}

.letter {
  height: 21px;
  margin-left: 1px;
  margin-top: -1113.37px;
  width: 10px;
}

.letter-6 {
  height: 30px;
  margin-left: 2px;
  margin-top: -1122px;
  width: 11px;
}

.letter-7 {
  height: 21px;
  margin-left: 1px;
  margin-top: -1113.37px;
  width: 11px;
}

.letter-8 {
  height: 29px;
  margin-left: 1px;
  margin-top: -1121.17px;
  width: 11px;
}

.flex-col-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 8181px;
  width: 1440px;
}

.flex-col-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 6065px;
  width: 1440px;
}

.flex-col-3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 4760px;
  width: 1440px;
}

.flex-col-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 4440px;
  width: 1440px;
}

.flex-col-5 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 4075px;
  width: 1440px;
}

.overlap-group4 {
  align-items: flex-end;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  gap: 49px;
  min-height: 950px;
  padding: 57px 138px;
  width: 1440px;
}

.flex-row {
  align-items: center;
  display: flex;
  height: 53px;
  min-width: 1151px;
}

.group-3 {
  align-self: flex-start;
  height: 49px;
  width: 212px;
}

.work {
  height: 39px;
  letter-spacing: -0.88px;
  line-height: 15px;
  margin-left: 655px;
  margin-top: 6px;
  text-align: center;
  width: 87px;
}

.about {
  height: 39px;
  letter-spacing: -0.88px;
  line-height: 15px;
  margin-top: 6px;
  text-align: center;
  width: 87px;
}

.contact {
  align-items: center;
  align-self: flex-end;
  display: flex;
  gap: 24px;
  margin-left: 21px;
  position: relative;
  width: fit-content;
}

.contained-default {
  align-items: center;
  background-color: var(--azure-radiance);
  border-radius: 8px;
  display: flex;
  padding: 12px 18px;
  position: relative;
  width: fit-content;
}

.label {
  color: var(--white);
  font-family: var(--font-family-overpass);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 18px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.overlap-group10 {
  align-items: flex-start;
  align-self: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6490a7587a44d675082dca0d/releases/6490acd6778f98d1d484b7b1/img/video-4.svg);
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: -12px;
  margin-left: 1px;
  min-height: 647px;
  padding: 246px 43px;
  position: relative;
  width: 1141px;
}

.headline-1 {
  color: var(--white);
  font-family: var(--font-family-overpass);
  font-size: var(--font-size-xl);
  font-weight: 600;
  height: 97px;
  letter-spacing: 0;
  line-height: 120px;
  text-align: center;
  white-space: nowrap;
  width: 1054px;
}

.flex-row-1 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 557px;
  margin-left: 2px;
  margin-top: 112px;
  min-width: 1140px;
}

.title {
  align-self: flex-end;
  color: transparent;
  font-family: var(--font-family-overpass);
  font-size: var(--font-size-xxxl);
  font-weight: 600;
  letter-spacing: -1.04px;
  line-height: 112px;
  min-height: 541px;
  width: 650px;
}

.span1 {
  color: var(--azure-radiance);
}

.span2 {
  color: #37c18d;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 554px;
  width: 466px;
}

.overlap-group9 {
  height: 293px;
  position: relative;
  width: 466px;
}

.subheader {
  height: 97px;
  left: 0;
  letter-spacing: 0;
  line-height: 120px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 424px;
}

.paragraph {
  left: 0;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 87px;
  width: 466px;
}

.overlap-group5 {
  height: 241px;
  position: relative;
  width: 466px;
}

.overlap-group8 {
  height: 2034px;
  margin-top: 150px;
  position: relative;
  width: 1440px;
}

.bg {
  background-color: var(--black);
  height: 1902px;
  left: 0;
  position: absolute;
  top: 132px;
  width: 1440px;
}

.overlap-group {
  align-items: center;
  background-color: var(--eerie-black);
  border-radius: 16px;
  display: flex;
  gap: 12px;
  height: 450px;
  left: 150px;
  min-width: 1140px;
  padding: 69px 72px;
  position: absolute;
  top: 0;
}

.subheader-2 {
  height: 200px;
  letter-spacing: 0;
  line-height: 50px;
  width: 443px;
}

.frame-2 {
  align-self: flex-end;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6490a7587a44d675082dca0d/releases/6490acd6778f98d1d484b7b1/img/video-5.svg);
  background-position: 50% 50%;
  background-size: cover;
  height: 309px;
  width: 541px;
}

.overlap-group1 {
  height: 568px;
  left: 162px;
  position: absolute;
  top: 934px;
  width: 398px;
}

.rectangle-2 {
  background-color: var(--white);
  border-radius: 16px;
  height: 566px;
  left: 1px;
  position: absolute;
  top: 0;
  width: 394px;
}

.paragraph-3 {
  left: 38px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 414px;
  width: 323px;
}

.subheader-3 {
  height: 97px;
  left: 38px;
  letter-spacing: 0;
  line-height: 120px;
  position: absolute;
  top: 327px;
  white-space: nowrap;
  width: 323px;
}

.rectangle-3 {
  background-color: var(--cloud);
  border-radius: 16px;
  height: 566px;
  left: 4px;
  position: absolute;
  top: 0;
  width: 394px;
}

.overlap-group2 {
  height: 568px;
  left: 883px;
  position: absolute;
  top: 934px;
  width: 394px;
}

.rectangle-2-1 {
  background-color: var(--white);
  border-radius: 16px;
  height: 566px;
  left: 0;
  position: absolute;
  top: 0;
  width: 394px;
}

.paragraph-1 {
  left: 37px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 414px;
  width: 323px;
}

.subheader-1 {
  height: 97px;
  left: 37px;
  letter-spacing: 0;
  line-height: 120px;
  position: absolute;
  top: 327px;
  white-space: nowrap;
  width: 323px;
}

.rectangle-2-2 {
  background-color: var(--cloud);
  border-radius: 16px;
  height: 566px;
  left: 886px;
  position: absolute;
  top: 936px;
  width: 394px;
}

.overlap-group3 {
  height: 568px;
  left: 523px;
  position: absolute;
  top: 934px;
  width: 394px;
}

.rectangle-2-3 {
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 8px 16px #0000004c;
  height: 566px;
  left: 0;
  position: absolute;
  top: 0;
  width: 394px;
}

.frame-3 {
  background-size: 100% 100%;
  height: 335px;
  left: 0;
  position: absolute;
  top: 0;
  width: 394px;
}

.icon-play {
  height: 56px;
  left: 456px;
  position: absolute;
  top: 1146px;
  width: 47px;
}

.vector-1 {
  height: 56px;
  left: 937px;
  position: absolute;
  top: 1149px;
  width: 47px;
}

.rectangle-7 {
  background-color: var(--eerie-black);
  border-radius: 16px;
  height: 225px;
  left: 137px;
  position: absolute;
  top: 1658px;
  width: 1140px;
}

.subheader-4 {
  height: 200px;
  left: 211px;
  letter-spacing: 0;
  line-height: 50px;
  position: absolute;
  top: 1670px;
  width: 756px;
}

.title-1 {
  left: 180px;
  letter-spacing: -1.04px;
  line-height: 112px;
  position: absolute;
  text-align: center;
  top: 582px;
  white-space: nowrap;
  width: 1140px;
}

.subheader-5 {
  left: 180px;
  letter-spacing: 0;
  line-height: 50px;
  position: absolute;
  text-align: center;
  top: 732px;
  width: 1140px;
}

.title-2 {
  letter-spacing: -1.04px;
  line-height: 112px;
  margin-top: 132px;
  min-height: 140px;
  width: 650px;
}

.flex-row-2 {
  align-items: flex-end;
  display: flex;
  gap: 55px;
  height: 229px;
  margin-right: 18px;
  margin-top: 41px;
  min-width: 1148px;
}

.flex-col-6 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-height: 222px;
  width: 203px;
}

.ellipse {
  border: 4px solid;
  border-color: var(--azure-radiance);
  border-radius: 69.5px;
  height: 139px;
  width: 139px;
}

.headline {
  letter-spacing: 0;
  line-height: 40px;
  min-height: 58px;
  text-align: center;
  width: 203px;
}

.paragraph-4 {
  letter-spacing: 0;
  line-height: 40px;
  min-height: 229px;
  width: 890px;
}

.vector-3 {
  height: 1px;
  margin-top: 94px;
  object-fit: cover;
  width: 948px;
}

.flex-row-3 {
  align-items: flex-start;
  display: flex;
  gap: 55px;
  height: 229px;
  margin-right: 18px;
  margin-top: 54px;
  min-width: 1148px;
}

.flex-col {
  align-items: center;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-height: 222px;
  width: 203px;
}

.paragraph-2 {
  letter-spacing: 0;
  line-height: 40px;
  min-height: 189px;
  width: 890px;
}

.vector-4 {
  height: 1px;
  margin-top: 36px;
  object-fit: cover;
  width: 948px;
}

.flex-row-4 {
  align-items: flex-start;
  display: flex;
  gap: 55px;
  height: 228px;
  margin-right: 18px;
  margin-top: 56px;
  min-width: 1148px;
}

.overlap-group7 {
  align-items: center;
  background-color: #eeeeee;
  border-radius: 16px;
  display: flex;
  gap: 31px;
  height: 639px;
  margin-top: 136px;
  min-width: 1140px;
  padding: 59px 72px;
}

.overlap-group11 {
  align-self: flex-end;
  height: 500px;
  position: relative;
  width: 592px;
}

.title-3 {
  color: transparent;
  font-family: var(--font-family-overpass);
  font-size: var(--font-size-xxl);
  font-weight: 600;
  left: 0;
  letter-spacing: -0.97px;
  line-height: 112px;
  position: absolute;
  top: 0;
  width: 592px;
}

.subheader-6 {
  left: 0;
  letter-spacing: 0;
  line-height: 50px;
  position: absolute;
  top: 260px;
  width: 592px;
}

.subheader-7 {
  letter-spacing: 0;
  line-height: 40px;
  margin-bottom: 5px;
  min-height: 448px;
  width: 366px;
}

.title-4 {
  letter-spacing: -1.04px;
  line-height: 112px;
  margin-left: 1px;
  margin-top: 127px;
  min-height: 118px;
  text-align: center;
  white-space: nowrap;
  width: 895px;
}

.flex-row-5 {
  align-items: center;
  display: flex;
  margin-top: 30px;
  min-width: 1104px;
}

.image-1 {
  height: 79px;
  margin-top: 17px;
  mix-blend-mode: multiply;
  width: 370px;
}

.screen-shot-2021-06-07-at-1642-1 {
  height: 58px;
  margin-left: 79px;
  margin-top: 22px;
  mix-blend-mode: multiply;
  width: 361px;
}

.image-3 {
  height: 118px;
  margin-left: 83px;
  object-fit: cover;
  width: 211px;
}

.overlap-group6 {
  height: 1852px;
  margin-top: 116px;
  position: relative;
  width: 1440px;
}

.bg-1 {
  background-color: var(--black);
  height: 1684px;
  left: 0;
  position: absolute;
  top: 168px;
  width: 1440px;
}

.rectangle-1 {
  background-color: var(--eerie-black);
  border-radius: 16px;
  height: 774px;
  left: 150px;
  position: absolute;
  top: 0;
  width: 1140px;
}

.request {
  align-items: center;
  display: flex;
  gap: 24px;
  left: 789px;
  position: absolute;
  top: 617px;
  width: fit-content;
}

.label-1 {
  letter-spacing: 0.3px;
  line-height: 18px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: 154px;
}

.subheader-8 {
  height: 200px;
  left: 222px;
  letter-spacing: 0;
  line-height: 50px;
  position: absolute;
  top: 331px;
  width: 984px;
}

.headline-2 {
  left: 222px;
  letter-spacing: -1.04px;
  line-height: 112px;
  position: absolute;
  top: 240px;
  white-space: nowrap;
  width: 478px;
}

.group-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 789px;
  min-height: 526px;
  position: absolute;
  top: 86px;
  width: 429px;
}

.avenue-code-horizont {
  height: 57px;
  left: 898px;
  object-fit: cover;
  position: absolute;
  top: 1567px;
  width: 172px;
}

.design-logo3x-2 {
  height: 44px;
  left: 406px;
  object-fit: cover;
  position: absolute;
  top: 1574px;
  width: 100px;
}

.were-here-to-bridge {
  left: 250px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 1640px;
  width: 412px;
}

.avenue-code-is-the-l {
  left: 778px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 1640px;
  width: 412px;
}
</style>
