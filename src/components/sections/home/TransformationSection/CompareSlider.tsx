"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";

interface Props {
  beforeImage: string;
  afterImage: string;
  swiper: any;
}

export default function CompareSlider({
  beforeImage,
  afterImage,
  swiper,
}: Props) {
  const disableSwiper = () => {
    swiper.current?.disable();
  };

  const enableSwiper = () => {
    swiper.current?.enable();
  };

  return (
    <div
      className="relative h-full w-full"
      onPointerDown={disableSwiper}
      onPointerUp={enableSwiper}
      onPointerLeave={enableSwiper}
      onTouchStart={disableSwiper}
      onTouchEnd={enableSwiper}
    >
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before" />}
        itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              width: "56px",
              height: "56px",
              borderRadius: "999px",
              background: "#F3EDE3",
              border: "2px solid #C6A26D",
              color: "#C6A26D",
              boxShadow: "0 10px 30px rgba(0,0,0,.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 600,
            }}
            linesStyle={{
              background: "#C6A26D",
              width: "2px",
            }}
          >
            <div className="flex items-center gap-1 text-lg font-semibold leading-none text-[#C6A26D]">
              <span>{"<"}</span>
              <span>{">"}</span>
            </div>
          </ReactCompareSliderHandle>
        }
      />
    </div>
  );
}
